import React, { useContext } from "react";
import style from "./ButtonHeader.module.css";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-context";

const ButtonHeader = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className={style.button}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default ButtonHeader;
