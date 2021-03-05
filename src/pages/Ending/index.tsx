import "./ending.scss";
import { getMessage } from "../../store/stage/selectors";
import { useSelector } from "react-redux";

function Ending() {
  const point = useSelector(getMessage) as number;

  const renderName = () => {
    if (point < 3) return "二等兵";
    if (point < 6) return "一等兵";
    if (point < 9) return "上等兵";

    if (point < 12) return "兵曹";
    if (point < 15) return "伍長";
    if (point < 18) return "軍曹";

    if (point < 21) return "少尉";
    if (point < 24) return "中尉";
    if (point < 27) return "大尉";

    if (point < 30) return "少佐";
    if (point < 33) return "中佐";
    if (point < 36) return "大佐";

    if (point < 39) return "少将";
    if (point < 42) return "中将";
    if (point < 45) return "大将";

    if (point === 45) return "元帥";

    return "魔術師";
  };

  const renderColor = () => {
    if (point < 9) return "white";

    if (point < 18) return "#32a852";

    if (point < 27) return "#2b7fd9";

    if (point < 36) return "#a42cd4";

    if (point < 45) return "#ed7818";

    if (point === 45) return "#ffd700";

    return "white";
  };

  return (
    <div className="end-container">
      <div className={"titleContainer"}>
        <div className={"title"}>
          <span className="text1">枚数：</span>
          <span className="text2">{point} 枚</span>
        </div>
        <div className={"title"}>
          <span className="text3">あなたは</span>
          <span
            style={{
              color: renderColor(),
            }}
            className={"pantTitle text4"}
          >
            パンツ{renderName()}
          </span>
          <span className={"lastSpan text5"}>です。</span>
        </div>
      </div>
    </div>
  );
}

export default Ending;
