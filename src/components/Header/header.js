import Image from "next/image";
import "./header.css";
import Dice from "@public/dice-1.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link className="header_nav-link" href={"/"}>
        <h1 className="header__title">
          Dices for you
          <Image
            className="header__dice_icon"
            src={Dice}
            alt="header__dice_icon"
          ></Image>
        </h1>
      </Link>

      <nav>
        <ul>
          <Link className="header_nav-link" href={"/games"}>
            Игры
          </Link>
        </ul>
      </nav>
    </header>
  );
}
