import "./game.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getLoading, getScene } from "../../store/stage/selectors";
import { level1 } from "../../data";

function Game() {
  // timer count
  const [seconds, setSeconds] = useState(5);
  // show pants
  const [pants, setPants] = useState(0);
  // record points
  const [point, setPoint] = useState(0);
  // show answer selections
  const [answerCount, setAnswerCount] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      console.log(seconds);
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setPants((pre) => pre + 1);
      }
      if (seconds === 0) clearInterval(myInterval);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds]);

  const handleClick = (name: string) => {
    if (name === level1?.[answerCount]?.name) setPoint(point + 1);
    setAnswerCount(answerCount + 1);
  };

  return (
    <div className="game-container">
      <div className={"role-container"}>
        <div className={"RB"}></div>
        <div
          className={"PANTS"}
          style={{ backgroundImage: `url(${level1?.[pants]?.img})` }}
        ></div>
      </div>
      {seconds === 0 && (
        <div className="answer-container">
          <div className="answer-title">第一關 : {point}</div>
          <div className="answer">
            {level1.map((item) => (
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
