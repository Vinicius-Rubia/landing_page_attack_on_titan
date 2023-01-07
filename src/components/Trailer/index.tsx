import { StyledTrailer } from "./style";
import { StyledTitleSpan } from "../../styles/typography";
import { trailerData } from "../../data/database";
import TrailerCard from "./TrailerCard";

interface ITrailer {
  className: string;
}

const Trailer = ({ className }: ITrailer) => {
  return (
    <>
      <StyledTitleSpan fontSize="md" fontWeight={500}>
        Trailers
      </StyledTitleSpan>
      <StyledTrailer className={className}>
        {trailerData.map((trailer, index) => (
          <TrailerCard key={index} trailer={trailer} />
        ))}
      </StyledTrailer>
    </>
  );
};

export default Trailer;
