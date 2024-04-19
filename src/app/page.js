"use client";
import Header from "@/Header/header";
import "./page.css";
import Random from "@/Random/Random";
import { useState } from "react";

export default function Home(props) {
  const [count, setCount] = useState(3);

  function addNumber() {
    setCount(count + 1);
    console.log(count);
  }
  function removeNumber() {
    if (count == 0) return;
    setCount(count - 1);
    console.log(count);
  }

  return (
    <main className="main">
      <Header />
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
        <div className="main__random_container">
          {Array(count)
            .fill()
            .map((_, index) => (
              <Random key={index} />
            ))}
        </div>
      </div>
    </main>
  );
}
