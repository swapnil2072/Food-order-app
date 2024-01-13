import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalNumberOfItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="food app logo" />
        <h1>Food app</h1>
      </div>
      <nav>
        <Button textOnly>Cart({totalNumberOfItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
