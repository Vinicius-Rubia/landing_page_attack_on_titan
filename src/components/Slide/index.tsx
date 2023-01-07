import { StyledSlide } from "./style";
import Capa from "../../img/capa.png";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

interface ISlide {
  className: string;
}

const Slide = ({ className }: ISlide) => {
  return (
    <StyledSlide className={className}>
      <img src={Capa} alt="Imagem de Capa" />
      <div className="controls">
        <div>
          <IoIosArrowDropleftCircle fontSize={45} />
          <IoIosArrowDroprightCircle fontSize={45} />
        </div>
        <div className="slide-counter">
          <span className="start">01</span>
          <hr className="line-counter" />
          <span className="end">10</span>
        </div>
      </div>
    </StyledSlide>
  );
};

export default Slide;
