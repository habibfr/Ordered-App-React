import React from "react";
import style from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={style["card-item"]}>
      {[
        {
          id: "m1",
          name: "Sushi",
          amount: 2,
          price: 22.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={style.total}>
        <span>Total Amounts</span>
        <span>34.55</span>
      </div>
      <div className={style.actions}>
        <button onClick={props.hideShowCart} className={style["button--alt"]}>
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
