import React, { useState } from "react";

export default function App() {
  const [currNum, setcurrNum] = useState(0);
  const [nextNum, setNextNum] = useState(0);
  const [symbol, setSymbol] = useState("");
  // const [calculate, setCalculate] = useState("");

  function handleOneChange(event) {
    if (symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/") {
      setNextNum(event.target.value);
    } else {
      if (event.target.id === "number") {
        var numberVal = event.target.value;
        setcurrNum(numberVal);
      } else if (event.target.id === "math") {
        setSymbol(event.target.value);
      }
    }
  }

  function calculateNum(event) {
    switch (symbol) {
      case "+":
        setcurrNum(String(Number(currNum) + Number(nextNum)));

        break;
      case "-":
        setcurrNum(String(Number(currNum) - Number(nextNum)));

        break;
      case "/":
        setcurrNum(String(Number(currNum) / Number(nextNum)));
        break;
      case "*":
        setcurrNum(String(Number(currNum) * Number(nextNum)));

        break;
      default:
        break;
    }

    setNextNum(0);
    setSymbol("");
  }

  return (
    <div className="App">
    <h1>Simple Calculator</h1>
      <h2>
        {currNum}
        <br />
        {symbol}
        <br />
        {nextNum}
      </h2>
      <button
        className="btn btn-info"
        id="number"
        value="1"
        onClick={handleOneChange}
      >
        1
      </button>
      <button
        className="btn btn-info"
        id="number"
        value="2"
        onClick={handleOneChange}
      >
        2
      </button>
      <button
        className="btn btn-info"
        id="number"
        value="3"
        onClick={handleOneChange}
      >
        3
      </button>
      <button
        className="btn btn-info"
        id="math"
        value="+"
        onClick={handleOneChange}
      >
        +
      </button>
      <br />
      <button
        className="btn btn-info"
        id="number"
        value="4"
        onClick={handleOneChange}
      >
        4
      </button>
      <button
        className="btn btn-info"
        id="number"
        value="5"
        onClick={handleOneChange}
      >
        5
      </button>
      <button
        className="btn btn-info"
        id="number"
        value="6"
        onClick={handleOneChange}
      >
        6
      </button>
      <button
        className="btn btn-info"
        id="math"
        value="-"
        onClick={handleOneChange}
      >
        -
      </button>
      <br />
      <button
        className="btn btn-info"
        id="number"
        value="7"
        onClick={handleOneChange}
      >
        7
      </button>
      <button
        className="btn btn-info"
        id="number"
        value="8"
        onClick={handleOneChange}
      >
        8
      </button>
      <button
        className="btn btn-info"
        id="number"
        value="9"
        onClick={handleOneChange}
      >
        9
      </button>
      <button
        className="btn btn-info"
        id="math"
        value="*"
        onClick={handleOneChange}
      >
        *
      </button>
      <br />
      <div className="bot-row">
      <div className="zero-equals">
          <button
        className="btn btn-info"
        id="number"
        value="0"
        onClick={handleOneChange}
      >
        0
      </button>
      

      <button
        className="btn btn-info"
        id="equals"
        value="="
        onClick={calculateNum}
      >
        =
      </button>

      </div>

     
      <button
        className="btn btn-info divide"
        id="math"
        value="/"
        onClick={handleOneChange}
      >
        /
      </button>

      </div>

   
    </div>
  );
}
