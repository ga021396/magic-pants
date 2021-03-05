import "./opening.scss";
import { useDispatch } from "react-redux";
import { fetchScene } from "../../store/stage/action";

function Opening() {
  const dispatch = useDispatch();
  const start = () => {
    dispatch(fetchScene(1));
  };
  const doc = () => {
    dispatch(fetchScene(-1));
  };

  return (
    <div className="container">
      <div className={"titleContainer"}>
        <div className={"title"}>パンツ魔術師</div>
        <div className="btnCon">
          <button className={"Btn cur"} onClick={start}>
            スタート
          </button>
          <button className={"Btn cur"} onClick={doc}>
            説明
          </button>
        </div>
      </div>
    </div>
  );
}

export default Opening;
