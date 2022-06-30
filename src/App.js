import React, { useState } from "react";

export default function App() {
  const [currNum, setcurrNum] = useState("");
  const [nextNum, setNextNum] = useState("");
  const [symbol, setSymbol] = useState("");

  function handleClear() {
    setcurrNum("");
    setNextNum("");
    setSymbol("");
  }

  function handleOneChange(event) {
    // if symbol has been updated, change the next number
    if (symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/") {
      setNextNum((previousState) => {
        return previousState + event.target.value;
      });
    } else {
      // else, only change the first number
      if (event.target.id === "number") {
        var numberVal = event.target.value;
        setcurrNum((previousState) => {
          return previousState + numberVal;
        });
      } else if (event.target.id === "math") {
        setSymbol(event.target.value);
      } 
    }
  }
  // turn number into percent form
  function handlePercent(){
    // if there is not a next num only change curr num
    if(!nextNum){
 let num = currNum / 100;
 setcurrNum(num);
    }
    if(symbol){
let nextnum = nextNum / 100;
setNextNum(nextnum);
    }

  }
// make numbers negative or positive
    function handleNegPos() {
      // if there is not a next num only change curr num
      if (!nextNum) {
        let num = currNum *-1 ;
        setcurrNum(num);
      }
      if (symbol) {
        let nextnum = nextNum *-1;
        setNextNum(nextnum);
      }
    }
// calculate numbers when equals is pressed
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
// reset nextnum and symbol
    setNextNum("");
    setSymbol("");
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <h2>
          {currNum}

          {symbol}

          {nextNum}
        </h2>

        <div className="buttonsdiv ">
          <button
            className="clear extra"
            id="number"
            value="clear"
            onClick={handleClear}
          >
            C
          </button>

          {/* plus minus */}
          <button
            className=" extra"
            id="special"
            value=""
            onClick={handleNegPos}
          >
            -/+
          </button>
          {/* percent sign */}
          <button
            className="clear extra"
            id="percent"
            value="%"
            onClick={handlePercent}
          >
            %
          </button>

          <button
            className="btn btn-info divide calc"
            id="math"
            value="/"
            onClick={handleOneChange}
          >
            /
          </button>

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
            className="btn btn-info calc"
            id="math"
            value="*"
            onClick={handleOneChange}
          >
            *
          </button>

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
            className="btn btn-info calc"
            id="math"
            value="-"
            onClick={handleOneChange}
          >
            -
          </button>

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
            className="btn btn-info calc"
            id="math"
            value="+"
            onClick={handleOneChange}
          >
            +
          </button>
          <div className="lastrow">
            <button
              className="btn btn-info zero"
              id="number"
              value="0"
              onClick={handleOneChange}
            >
              0
            </button>
            <button
              className="btn btn-info decimal"
              id="number"
              value="."
              onClick={handleOneChange}
            >
              .
            </button>
            <button
              className="btn btn-info calc"
              id="equals"
              value="="
              onClick={calculateNum}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
