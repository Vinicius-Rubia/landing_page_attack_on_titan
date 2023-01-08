import ContentText from "./components/ContentText";
import Slide from "./components/Slide";
import Trailer from "./components/Trailer";
import { StyledContainer } from "./styles/app";

function App() {
  return (
    <StyledContainer>
      <ContentText className="contentText" />
      <div className="section-trailer">
        <Slide className="slider" />
        <Trailer className="trailer" />
      </div>
    </StyledContainer>
  );
}

export default App;
