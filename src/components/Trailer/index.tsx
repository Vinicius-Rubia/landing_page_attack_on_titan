import { StyledTrailer } from "./style";
import { StyledTitleSpan } from "../../styles/typography";
import { trailerData } from "../../data/database";
import TrailerCard from "./TrailerCard";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface ITrailer {
  className: string;
}

const Trailer = ({ className }: ITrailer) => {
  const carousel = useRef<any>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, []);

  return (
    <StyledTrailer className={className}>
      <StyledTitleSpan fontSize="md" fontWeight={500}>
        Trailers
      </StyledTitleSpan>

      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="card-trailer"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {trailerData.map((trailer, index) => (
            <motion.div className="item" key={index}>
              <TrailerCard trailer={trailer} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </StyledTrailer>
  );
};

export default Trailer;
