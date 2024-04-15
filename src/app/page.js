"use client";
import Header from "@/Header/header";
import "./page.css";
import Random from "@/Random/Random";
import { useState } from "react";

export default function Home(props) {
  const [count, setCount] = useState(0);

  function addNumber() {
    setCount(count + 1);
    console.log(count);
  }
  function removeNumber() {
    if (count == 0) return;s
    setCount(count - 1);
    console.log(count);
  }

  return (
    <main className="main">
      <Header />
      <div className="main__container">
        <div>
          <button className="main__plus-button" onClick={removeNumber}>
            -
          </button>
          <button className="main__plus-button" onClick={addNumber}>
            +
          </button>
        </div>
        <h2 className="main__text">Welcome to DiceDungeon!</h2>
        {Array(count)
          .fill()
          .map((_, index) => (
            <div key={index}>{<Random />}</div>
          ))}
      </div>
    </main>
  );
}
