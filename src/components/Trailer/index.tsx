import { StyledTrailer } from "./style";
import { StyledTitleSpan } from "../../styles/typography";
import { trailerData } from "../../data/database";
import TrailerCard from "./TrailerCard";

interface ITrailer {
  className: string;
}

const Trailer = ({ className }: ITrailer) => {
  return (
    <StyledTrailer className={className}>
      <StyledTitleSpan fontSize="md" fontWeight={500}>
        Trailers
      </StyledTitleSpan>
      <div className="card-trailer">
        {trailerData.map((trailer, index) => (
            <TrailerCard key={index} trailer={trailer} />
        ))}
      </div>
    </StyledTrailer>
  );
};

export default Trailer;
