import React from "react";
import "../styles/App.css";
const App = () => {
  function handleClick(event) {
    var x = event.target.id;
    switch (x) {
      case "button-a":
        console.log("Button id is:-button-a");
        break;
      case "button-b":
        console.log("Button id is:-button-b");
        break;
    } // use console.log
  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button id="button-a" onClick={handleClick}>
        Button A
      </button>
      <button id="button-b" onClick={handleClick}>
        Button B
      </button>
    </div>
  );
};

export default App;
