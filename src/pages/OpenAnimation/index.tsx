import "./openAnimation.scss";
import { useDispatch } from "react-redux";
import { fetchScene } from "../../store/stage/action";
import { useState, useEffect } from "react";

function OpenAnimation({ playAudio }: any) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count === 2) {
      playAudio();
      dispatch(fetchScene(1));
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="container">
      <div className={"loadingContainer"} onClick={handleClick}>
        {count === 0 && (
          <div className="typewriter">
            <h1>如果能回到過去，</h1>
          </div>
        )}
        {count === 1 && (
          <div className="typewriter">
            <h1>我是不是就不會，</h1>
          </div>
        )}
        {count === 2 && (
          <div className="typewriter">
            <h1>活成現在這個樣子...</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default OpenAnimation;
