import React, { useState } from "react";
import ResultView from "./ResultView";
import Keyboard from "./Keyboard";
import "./style.css";
const Calculator = () => {
  const [result, setResult] = useState("");

  //handle click
  const handleClick = (e) => {
    setResult(result?.concat(e.target?.name));
  };

  //clear button
  const clear = () => {
    setResult("");
  };

  //back button
  const backspace = () => {
    setResult(result?.slice(0, -1));
  };

  //calculator
  const calc = () => {
    try {
      setResult(Number(eval(result).toString()).toFixed(2));
    } catch (error) {
      setResult("inavalid format");
    }
  };
  return (
    <>
      <div class="container">
        <div class="calculator">
          <input
            type="text"
            style={{ outline: "none" }}
            class="calc-numbers"
            value={result}
            // onChange={(e) => setResult(e.target.value)}
          />
          <div class="calculator-buttons">
            <button onClick={clear} class="orange clear span-2">
              AC
            </button>
            <button onClick={backspace} class="orange">
              &larr;
            </button>
            <button onClick={handleClick} name="/" class="orange">
              &divide;
            </button>
            <button onClick={handleClick} name="7" class="btn2">
              7
            </button>
            <button onClick={handleClick} name="8" class="btn2">
              8
            </button>
            <button onClick={handleClick} name="9" class="btn2">
              9
            </button>
            <button onClick={handleClick} name="*" class="orange">
              x
            </button>
            <button onClick={handleClick} name="4" class="btn2">
              4
            </button>
            <button onClick={handleClick} name="5" class="btn2">
              5
            </button>
            <button onClick={handleClick} name="6" class="btn2">
              6
            </button>
            <button onClick={handleClick} name="-" class="orange">
              -
            </button>
            <button onClick={handleClick} name="1" class="btn2">
              1
            </button>
            <button onClick={handleClick} name="2" class="btn2">
              2
            </button>
            <button onClick={handleClick} name="4" class="btn2">
              3
            </button>
            <button onClick={handleClick} name="+" class="orange">
              +
            </button>
            <button onClick={handleClick} name="0" class="btn2 span-3">
              0
            </button>
            <button onClick={calc} class="orange equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
