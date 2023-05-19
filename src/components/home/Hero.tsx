import React from "react";
import styles from "./hero.module.css";
import { Logo } from "../ayni-brand/Logo";

export default function Hero() {
  return (
    <div
      className={`${styles.hero} w-full lg:py-56 py-24 grid place-items-center`}
    >
      <div className="w-full max-w-7xl flex lg:flex-row flex-col items-center gap-8 justify-between px-4 xl:px-0">
        <div className="order-2 lg:order-1">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Collaboration is key
          </h1>
          <h2 className="text-white text-3xl md:text-5xl font-semibold mt-2">
            Innovation is our game
          </h2>
        </div>
        <div className="order-1 lg:order-2">
          <Logo variant="white" height={196} />
        </div>
      </div>
    </div>
  );
}
