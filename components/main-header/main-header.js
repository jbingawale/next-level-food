import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classess from "./main-header.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classess.header}>
        <Link className={classess.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classess.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
