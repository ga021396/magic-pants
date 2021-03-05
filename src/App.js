import React from "react";
import Game from "./pages/Game";
import Opening from "./pages/Opening";
import Ending from "./pages/Ending";
import Doc from "./pages/Doc";

import { useSelector } from "react-redux";
import { getScene } from "./store/stage/selectors";
import { createLevel } from "./data";

import "./App.scss";

function App() {
  const scene = useSelector(getScene);
  const level1 = createLevel(5);
  const level2 = createLevel(6);
  const level3 = createLevel(7);
  const level4 = createLevel(8);
  const level5 = createLevel(9);
  const level6 = createLevel(10);

  return (
    <div className="App">
      {scene === 0 && <Opening></Opening>}

      {scene === 1 && <Game level={level1}></Game>}
      {scene === 2 && <Game level={level2}></Game>}
      {scene === 3 && <Game level={level3} isBG></Game>}
      {scene === 4 && <Game level={level4} isBG isMusic></Game>}
      {scene === 5 && <Game level={level5} isBG isMusic></Game>}
      {scene === 6 && <Game level={level6} isBG isMusic speed={500}></Game>}
      {scene === 7 && <Ending></Ending>}
      {scene === -1 && <Doc></Doc>}
    </div>
  );
}

export default App;
