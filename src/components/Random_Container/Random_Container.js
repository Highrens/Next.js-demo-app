"use client";
import { useState } from "react";
import RandomArray from "../RandomArray/RandomArray";
import "./Random_Container.css"
export default function Random_Container(props) {
  const [count, setCount] = useState(3);

  function addNumber() {
    setCount(count + 1);
  }
  function removeNumber() {
    if (count == 0) return;
    setCount(count - 1);
  }
  function ReRoll() {
    var temp = count;
    setCount(0);
    setTimeout(() => {
      setCount(temp);
    }, 1);
  }

  return (
    <div className="main__container">
      <div className="main__button-container">
        <button className="main__plus-button" onClick={removeNumber}>
          -
        </button>
        <h1>{count}</h1>
        <button className="main__plus-button" onClick={addNumber}>
          +
        </button>
      </div>
      <button className="main__reroll-button" onClick={ReRoll}>
        Reroll
      </button>
      {Array(Math.ceil(count / 5))
        .fill()
        .map((_, index) => (
          <RandomArray count={count} key={index} number={index}/>
        ))}
    </div>
  );
}
