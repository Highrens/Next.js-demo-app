import Image from "next/image";
import "./header.css";
import Dice from "@public/dice-3.svg";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Dices for you
      </h1>
      <Image className="header__dice_icon" src={Dice} alt='header__dice_icon'></Image>
    </header>
  );
}
