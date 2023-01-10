import { useEffect, useState, useRef } from "react";
import { StyledSlide } from "./style";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

interface ISlide {
  className?: string;
}

const Slide = ({ className }: ISlide) => {
  const [data, setData] = useState([]);
  const [slideCurrent, setSlide] = useState(1);
  const [slideTotal, setSlideTotal] = useState(1);
  const carousel = useRef<any>(null); 

  useEffect(() => {
    fetch("http://localhost:5173/src/data/data.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeft = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current?.offsetWidth;
    setSlide(slideCurrent - 1);
  }

  const handleRight = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current?.offsetWidth;
    setSlide(slideCurrent + 1);
  }

  if (!data || !data.length) return null;

  return (
    <StyledSlide className={className}>
      <div className="carousel" ref={carousel}>
        {data.map(({ id, image }) => (
          <img key={id} src={image} alt="Imagem de Capa" />
        ))}
      </div>
      <div className="controls">
        <div>
          <IoIosArrowDropleftCircle fontSize={45} onClick={handleLeft} />
          <IoIosArrowDroprightCircle fontSize={45} onClick={handleRight} />
        </div>
        <div className="slide-counter">
          <span className="start">{slideCurrent}</span>
          <hr className="line-counter" />
          <span className="end">{slideTotal}</span>
        </div>
      </div>
    </StyledSlide>
  );
};

export default Slide;
