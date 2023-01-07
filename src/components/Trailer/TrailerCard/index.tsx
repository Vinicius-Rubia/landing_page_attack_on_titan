import { ITrailer } from "../../../data/database";
import { FiPlay } from "react-icons/fi";

interface ITrailerCard {
  trailer: ITrailer;
}

const TrailerCard = ({ trailer }: ITrailerCard) => {
  return (
    <div>
      <div>
        <img src={trailer.capa} alt="Capa - Trailer" />
        <FiPlay fontSize={20} /> <span>{trailer.ep}</span>
      </div>
    </div>
  );
};

export default TrailerCard;
