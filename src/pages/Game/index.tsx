import "./game.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getMessage, getScene } from "../../store/stage/selectors";
import { basicData } from "../../data";
import { useDispatch } from "react-redux";
import { fetchMessage, fetchScene } from "../../store/stage/action";
//@ts-ignore
import correct from "../../music/correct.mp3";
//@ts-ignore
import fail from "../../music/fail.mp3";
//@ts-ignore
import pantsMus from "../../music/pants.mp3";

function Game({ level, isBG, isMusic, speed }: any) {
  // timer count
  const [seconds, setSeconds] = useState(level.length);
  // show pants
  const [pants, setPants] = useState(0);
  // show answer selections
  const [answerCount, setAnswerCount] = useState(0);
  const scene = useSelector(getScene) as number;
  const point = useSelector(getMessage) as number;
  const dispatch = useDispatch();

  const [pantsAud, setPantsAud] = useState(new Audio(pantsMus));
  const [audio, setAudio] = useState(new Audio(correct));

  const playAudio = (music: any) => {
    if (music) {
      setAudio(new Audio(correct));
      audio.volume = 0.1;
      audio.play();
    } else {
      setAudio(new Audio(fail));
      audio.volume = 0.1;
      audio.play();
    }
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setPants((pre) => pre + 1);
      }
      if (seconds === 0) clearInterval(myInterval);
    }, speed || 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds]);

  const handleClick = (name: string) => {
    if (name === level?.[answerCount]?.name) {
      playAudio(true);
      dispatch(fetchMessage(point + 1));
    } else {
      playAudio(false);
    }
    if (answerCount + 1 === level.length) {
      if (isMusic) {
        setPantsAud(new Audio(pantsMus));
        pantsAud.volume = 0.5;
        pantsAud.play();
      }
      dispatch(fetchScene(scene + 1));
    }
    setAnswerCount(answerCount + 1);
  };

  return (
    <div
      className="game-container"
      style={{ backgroundColor: isBG ? `${level?.[pants]?.color}` : "black" }}
    >
      {seconds !== 0 && (
        <div className={"role-container"}>
          <div className={"RB"}></div>
          <div
            className={speed ? "PANTS speedAnime" : "PANTS"}
            style={{ backgroundImage: `url(${level?.[pants]?.img})` }}
          ></div>
        </div>
      )}

      {seconds === 0 && (
        <div className="answer-container">
          <div className="answer-title">{answerCount + 1}枚目</div>
          <div className="answer">
            {basicData.map((item: any) => (
              <div
                className="answer-item"
                style={{ backgroundImage: `url(${item?.img})` }}
                onClick={() => handleClick(item.name)}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
