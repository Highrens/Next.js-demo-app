"use client";
import dice1 from "@public/dice-1.svg";
import dice2 from "@public/dice-2.svg";
import dice3 from "@public/dice-3.svg";
import dice4 from "@public/dice-4.svg";
import dice5 from "@public/dice-5.svg";
import dice6 from "@public/dice-6.svg";

import Image from "next/image";
import "./Random.css";
import { useEffect, useState } from "react";

const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Random() {
  const [imageSrc, setImageSrc] = useState(1);

  useEffect(() => {
    setImageSrc(randomIntFromInterval(0, 5));
  }, []);

  return (
    <div className="Random">
      <Image src={dices[imageSrc]} alt="dice" className="Random__dice"></Image>
    </div>
  );
}
