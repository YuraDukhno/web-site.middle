import React from "react";

export default function Header() {
  return (
    <div className="header__wrapper container">
      <ul className="header__navbar navbar">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">About me</li>
        <li className="navbar-item">Portfolio</li>
        <li className="navbar-item">Contact</li>
      </ul>
      <hr className="bottom-line" />
    </div>
  );
}
