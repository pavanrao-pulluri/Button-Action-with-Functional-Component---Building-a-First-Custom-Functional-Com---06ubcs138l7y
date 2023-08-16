
import React, {Component, useState} from "react";
import "../styles/App.css";

function App() {
  const [showPara, setShowPara] = useState(false);

  const handleClick = () => {
    setShowPara(true);
  };

  return (
    <div className="App">
      <button id="click" onClick={handleClick}>
        Click Me
      </button>
      {showPara && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
      )}
    </div>
  );
}


export default App;
