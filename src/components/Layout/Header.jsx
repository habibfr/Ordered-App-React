import React from "react";
import { Fragment } from "react";
import { images } from "../Static";
import style from "./Header.module.css";

import ButtonHeader from "./ButtonHeader";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>Meals</h1>
        <ButtonHeader onClick={props.showCart} />
      </header>

      <div className={style["main-image"]}>
        <img src={images.meals} alt="meals images" />
      </div>
    </Fragment>
  );
};

export default Header;
