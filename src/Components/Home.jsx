import React from "react";
import Header from "./Header";
import arrow from "../Assets/Desktop/double-arrow.png";

export default function Home() {
  return (
    <div className="home__wrapper">
      {/* Header navigation */}
      <Header />
      <div className="scroll__wrapper">
        <div className="scroll__text">scroll down to see more</div>
        <div className="scroll__arrow">
          <img width="100%" src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
}
