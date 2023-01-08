import ContentText from "./components/ContentText";
import Slide from "./components/Slide";
import Trailer from "./components/Trailer";

function App() {
  return (
    <div className="App">
      <ContentText className="contentText" />
      <div className="section-trailer">
        <Slide className="slider" />
        <Trailer className="trailer" />
      </div>
    </div>
  );
}

export default App;
