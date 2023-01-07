import { StyledTrailer } from "./style"
import { StyledTitleSpan } from "../../styles/typography";
import { trailerData } from "../../data/database";
import TrailerCard from "./TrailerCard";

const Trailer = () => {
  return (
    <StyledTrailer>
      <StyledTitleSpan fontSize="md" fontWeight={500}>Trailers</StyledTitleSpan>
      {trailerData.map((trailer, index) => (
        <TrailerCard key={index} trailer={trailer}/>
      ))}
    </StyledTrailer>
  )
}

export default Trailer