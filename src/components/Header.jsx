import React from "react";
import logoImg from "../assets/logo.jpg";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="food app logo" />
        <h1>Food app</h1>
      </div>
      <nav>
        <button className="cart">Cart(0)</button>
      </nav>
    </header>
  );
};

export default Header;
