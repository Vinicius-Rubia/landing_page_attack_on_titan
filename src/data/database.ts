import Trailer1 from "../img/trailer1.png";
import Trailer2 from "../img/trailer2.png";
import Trailer3 from "../img/trailer3.png";
import Trailer4 from "../img/trailer4.png";

export interface ITrailer {
  capa: string;
  ep: string;
}

export const trailerData: ITrailer[] = [
  {
    capa: Trailer1,
    ep: "#1",
  },
  {
    capa: Trailer2,
    ep: "#2",
  },
  {
    capa: Trailer3,
    ep: "#3",
  },
  {
    capa: Trailer4,
    ep: "#4",
  },
];
