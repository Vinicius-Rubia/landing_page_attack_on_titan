import { useState, useRef } from "react";
import { StyledSlide } from "./style";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

import { slideData } from "../../data/database";

interface ISlide {
  className: string;
}

const Slide = ({ className }: ISlide) => {
  const [slideCurrent, setSlide] = useState(1);
  const carousel = useRef<any>(null);

  const handleLeft = (e: any) => {
    e.preventDefault();
    if (slideCurrent > 1) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
      return setSlide(slideCurrent - 1);
    }
  };

  const handleRight = (e: any) => {
    e.preventDefault();
    if (slideCurrent < slideData.length) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
      return setSlide(slideCurrent + 1);
    }
  };

  return (
    <StyledSlide className={className}>
      <div className="carousel" ref={carousel}>
        {slideData.map(({ id, slide }) => (
          <img key={id} src={slide} alt="Imagem de Capa" />
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
          <span className="end">{slideData.length}</span>
        </div>
      </div>
    </StyledSlide>
  );
};

export default Slide;
