import { ITrailer } from "../../../data/database";
import { FiPlay } from "react-icons/fi";
import { StyledTrailerCard } from "./style";

interface ITrailerCard {
  trailer: ITrailer;
}

const TrailerCard = ({ trailer }: ITrailerCard) => {
  return (
    <StyledTrailerCard>
      <img src={trailer.capa} alt="Capa - Trailer" />
      <a href="#">
        <FiPlay fontSize={25} /> <span>{trailer.ep}</span>
      </a>
    </StyledTrailerCard>
  );
};

export default TrailerCard;
