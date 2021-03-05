import black from "../image/black.png";
import gray from "../image/gray.png";
import blue from "../image/blue.png";
import RED from "../image/RED.png";
import style from "../image/style.png";

// add background color switch
export const basicData = [
  { name: "black", img: black, color: "#B11C2A" },
  { name: "gray", img: gray, color: "#2D3853" },
  { name: "blue", img: blue, color: "#78777D" },
  { name: "RED", img: RED, color: "#716D6E" },
  { name: "style", img: style, color: "#2B2D32" },
];

const color = ["#B11C2A", "#2D3853", "#78777D", "#716D6E", "#2B2D32"];

export const createLevel = (count: number) => {
  let newLevel: any = [];
  for (let i = 0; i < count; i++) {
    let selectedPants = Math.floor(Math.random() * 5);
    let selectColor = Math.floor(Math.random() * 5);

    newLevel.push({ ...basicData[selectedPants], color: color[selectColor] });
  }
  return newLevel;
};
