import { StyledContentText } from "./style";
import Logo from "../../img/logo.svg";
import Play from "../../img/play.svg";
import { StyledParagraph, StyledTitleSpan } from "../../styles/typography";
import { RiMenu2Fill } from "react-icons/ri";

export interface IContentText {
  className: string;
}

const ContentText = ({ className }: IContentText) => {
  return (
    <StyledContentText className={className}>
      <div>
        <RiMenu2Fill fontSize={32} />
      </div>
      <div>
        <img className="logo" src={Logo} alt="Logo" />
        <h1>
          <StyledTitleSpan fontSize="lg" fontWeight={300}>
            THE
          </StyledTitleSpan>
          <StyledTitleSpan fontSize="lg" fontWeight={900}>
            <em>FINAL</em>
          </StyledTitleSpan>
          <StyledTitleSpan fontSize="lg" fontWeight={500}>
            SEASON
          </StyledTitleSpan>
        </h1>
        <div className="watch">
          <img src={Play} alt="Play" />
          <div>
            <StyledTitleSpan fontSize="md" fontWeight={500}>
              Watch
            </StyledTitleSpan>
            <StyledParagraph fontSize="lg" fontWeight={300}>
              DECEMBER 7
            </StyledParagraph>
          </div>
        </div>
        <div className="description">
          <StyledParagraph fontSize="md" fontWeight={300}>
            The fourth and final season of the Attack on Titan anime television
            series, titled Attack on Titan: The Final Season, is{" "}
            <strong>produced by MAPPA</strong>, chief directed by Jun Shishido,
            and directed by Yūichirō Hayashi, replacing Tetsurō Araki and
            Masashi Koizuka respectively. Scriptwriter{" "}
            <strong>Hiroshi Seko</strong> took over the series composition from{" "}
            <strong>Yasuko Kobayashi</strong>, and Tomohiro Kishi replaced Kyōji
            Asano as character designer due to the series switching production
            studios.
          </StyledParagraph>
        </div>
        <ul className="social-media">
          <li>
            <StyledParagraph fontSize="sm" fontWeight={500}>
              FACEBOOK
            </StyledParagraph>
          </li>
          <li>
            <StyledParagraph fontSize="sm" fontWeight={500}>
              TWITTER
            </StyledParagraph>
          </li>
          <li>
            <StyledParagraph fontSize="sm" fontWeight={500}>
              INSTAGRAM
            </StyledParagraph>
          </li>
          <li>
            <StyledParagraph fontSize="sm" fontWeight={500}>
              YOUTUBE
            </StyledParagraph>
          </li>
        </ul>
      </div>
    </StyledContentText>
  );
};

export default ContentText;
