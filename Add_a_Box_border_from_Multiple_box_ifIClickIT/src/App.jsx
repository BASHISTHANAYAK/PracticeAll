// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [colors, setColors] = useState([
//     { id: 1, color: "#b38bfa" },
//     { id: 2, color: "#ff79f2" },
//     { id: 3, color: "#43e6fc" },
//     { id: 4, color: "#f19576" },
//     { id: 5, color: "#0047ff" },
//     { id: 6, color: "#6691ff" },
//   ]);

//   console.log("colors-", colors);
//   //clickColor
//   function clickColor(id) {
//     console.log(id);
//     let newMap = colors.map((obj) => {
//       if (obj.id == id) {
//         return { ...obj, className: "changeCss" };
//       } else {
//         // const { className, ...details } = obj;
//         // return details;
//         // or
//         delete obj.className;
//         return obj;
//       }
//     });
//     setColors(() => newMap);
//   }
//   return (
//     <div className="container">
//       {colors.map((ele) => (
//         <button
//           key={ele.id}
//           className={ele.className ? ele.className : null}
//           onClick={() => clickColor(ele.id)}
//         >
//           {ele.id}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (id) => {
    setActiveButton(id); // Set the clicked button as active
  };

  return (
    <div className="button-container">
      <button
        onClick={() => handleClick("button1")}
        style={{
          border:
            activeButton === "button1"
              ? "2px solid red"
              : "2px solid transparent",
          padding: "10px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        Button 1
      </button>

      <button
        onClick={() => handleClick("button2")}
        style={{
          border:
            activeButton === "button2"
              ? "2px solid red"
              : "2px solid transparent",
          padding: "10px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        Button 2
      </button>

      <button
        onClick={() => handleClick("button3")}
        style={{
          border:
            activeButton === "button3"
              ? "2px solid red"
              : "2px solid transparent",
          padding: "10px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        Button 3
      </button>

      <button
        onClick={() => handleClick("button4")}
        style={{
          border:
            activeButton === "button4"
              ? "2px solid red"
              : "2px solid transparent",
          padding: "10px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        Button 4
      </button>

      <button
        onClick={() => handleClick("button5")}
        style={{
          border:
            activeButton === "button5"
              ? "2px solid red"
              : "2px solid transparent",
          padding: "10px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        Button 5
      </button>
    </div>
  );
}

export default App;
