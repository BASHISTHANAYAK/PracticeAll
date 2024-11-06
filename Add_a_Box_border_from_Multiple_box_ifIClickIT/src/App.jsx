import { useState } from "react";
import "./App.css";

function App() {
  const [colors, setColors] = useState([
    { id: 1, color: "#b38bfa" },
    { id: 2, color: "#ff79f2" },
    { id: 3, color: "#43e6fc" },
    { id: 4, color: "#f19576" },
    { id: 5, color: "#0047ff" },
    { id: 6, color: "#6691ff" },
  ]);

  console.log("colors-", colors);
  //clickColor
  function clickColor(id) {
    console.log(id);
    let newMap = colors.map((obj) => {
      if (obj.id == id) {
        return { ...obj, className: "changeCss" };
      } else {
        const { className, ...details } = obj;
        return details;
      }
    });
    setColors(() => newMap);
  }
  return (
    <div className="container">
      {colors.map((ele) => (
        <button
          key={ele.id}
          className={ele.className ? ele.className : null}
          onClick={() => clickColor(ele.id)}
        >
          {ele.id}
        </button>
      ))}
    </div>
  );
}

export default App;
