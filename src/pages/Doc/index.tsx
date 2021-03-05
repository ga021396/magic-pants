import "./doc.scss";
import { useDispatch } from "react-redux";
import { fetchScene } from "../../store/stage/action";

function Doc() {
  const dispatch = useDispatch();
  const back = () => {
    dispatch(fetchScene(0));
  };

  return (
    <div className="doc-container">
      <div className={"wrapper"}>
        <p>Twitch最強のパンツマジシャン：R”B</p>
        <p>また出演することになりました！</p>
        <p>今日は六つのショーを出演する予定です！</p>
        <p>あなたは一体どこまで見破れるか？</p>
        <br />
        <br />
        <br />
        <p>他のゲーム：</p>
        <div>
          <a href="https://ga021396.github.io/Sam1268/" target="_blank">
            超志祥
          </a>
          <a href="https://ga021396.github.io/steamer-test/" target="_blank">
            兄弟幫心理測驗
          </a>
          <a href="https://ga021396.github.io/mota-bro-ver/" target="_blank">
            兄弟塔
          </a>
        </div>
        <button className="Btn" onClick={back}>
          戻る
        </button>
      </div>
    </div>
  );
}

export default Doc;
