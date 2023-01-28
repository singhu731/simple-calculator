import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [result, setResult] = useState("");
  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };
  const clearDisplay = () => {
    setResult("");
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };
  return (
    <div className="cal">
      <input type="text" placeholder="0" id="ans" value={result} />
      <input
        type="button"
        className="button"
        value="9"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="8"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="7"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="6"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="5"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="4"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="3"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="2"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="1"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="0"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="."
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="+"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="-"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="*"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="/"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="%"
        onClick={clickHandler}
      />
      <input
        type="button"
        className="button"
        value="Clear"
        onClick={clearDisplay}
      />
      <input type="button" className="button" value="=" onClick={calculate} />
    </div>
  );
};

export default App;
