import React from "react";
import { Fragment } from "react";
import style from "./Header.module.css";

import ButtonHeader from "./ButtonHeader";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <a href="https://habibfr.vercel.app/" className={style.link}>
          <h1>Hbb</h1>
        </a>
        <ButtonHeader onClick={props.showCart} />
      </header>

      <div className={style["main-image"]}>
        {/* <img src={images.tech} alt="bg images" /> */}
      </div>
    </Fragment>
  );
};

export default Header;
