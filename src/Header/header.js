import Image from "next/image";
import "./header.css";
import Dice from "@public/dice-3.svg";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        DiceDungeon
      </h1>
      <Image src={Dice} alt='header__dice_icon'></Image>
    </header>
  );
}
