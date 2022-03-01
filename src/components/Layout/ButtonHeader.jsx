import React from "react";
import style from "./ButtonHeader.module.css";

import CartIcon from "../Cart/CartIcon";

const ButtonHeader = (props) => {
  return (
    <button className={style.button}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>3</span>
    </button>
  );
};

export default ButtonHeader;
