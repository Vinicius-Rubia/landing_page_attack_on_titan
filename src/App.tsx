import ContentText from "./components/ContentText";
import Slide from "./components/Slide";
import Trailer from "./components/Trailer";

function App() {
  return (
    <div className="App">
      <ContentText />
      <div>
        <Slide />
        <Trailer />
      </div>
    </div>
  );
}

export default App;
