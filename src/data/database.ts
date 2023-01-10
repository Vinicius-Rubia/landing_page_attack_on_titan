import Trailer1 from "../img/trailer1.png";
import Trailer2 from "../img/trailer2.png";
import Trailer3 from "../img/trailer3.png";
import Trailer4 from "../img/trailer4.png";
import Slide1 from "../img/capa1.png";
import Slide2 from "../img/capa2.png";
import Slide3 from "../img/capa3.png";
import Slide4 from "../img/capa4.png";
import Slide5 from "../img/capa5.png";

export interface ITrailer {
  capa: string;
  ep: string;
}

export interface iSlide {
  slide: string;
  id: number;
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

export const slideData: iSlide[] = [
  {
    id: 1,
    slide: Slide1,
  },
  {
    id: 2,
    slide: Slide2,
  },
  {
    id: 3,
    slide: Slide3,
  },
  {
    id: 4,
    slide: Slide4,
  },
  {
    id: 5,
    slide: Slide5,
  }
]