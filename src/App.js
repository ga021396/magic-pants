import React from "react";
import Game from "./pages/Game";
import Opening from "./pages/Opening";
import Mask from "./pages/Mask";
import Scene from "./pages/Scene";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getLoading, getScene } from "./store/stage/selectors";
import opening from "./music/opening.mp3";

import "./App.scss";

function App() {
  const isLoading = useSelector(getLoading);
  const scene = useSelector(getScene);
  const [audio, setAudio] = useState(new Audio(opening));

  const handleClickOptionA = () => {};
  const handleClickOptionB = () => {};

  const playAudio = () => {
    audio.volume = 0.1;
    audio.play();
  };

  const pauseAudio = () => {
    audio.pause();
  };

  return (
    <div className="App">
      {/* {isLoading && <Mask></Mask>} */}
      {scene === 0 && <Game></Game>}
      {/* {scene === 0 && (
        <Opening
          audio={audio}
          setAudio={(audio) => setAudio()}
          playAudio={playAudio}
          pauseAudio={pauseAudio}
        ></Opening>
      )} */}
    </div>
  );
}

export default App;
