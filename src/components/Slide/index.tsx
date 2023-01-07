import { StyledSlide } from "./style";
import Capa from "../../img/capa.png";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const Slide = () => {
  return (
    <StyledSlide>
      <img src={Capa} alt="Imagem de Capa" />
      <div>
        <div>
          <IoIosArrowDropleftCircle fontSize={45} />
          <IoIosArrowDroprightCircle fontSize={45} />
        </div>
        <div>01 - 10</div>
      </div>
    </StyledSlide>
  );
};

export default Slide;
