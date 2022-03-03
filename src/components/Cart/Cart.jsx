import React, { useContext } from "react";
import style from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);



  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    
  };
  const cartItemRemoveHandler = (id) => {
    
  };



  const cartItems = (
    <ul className={style["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={style.total}>
        <span>Total Amounts</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button onClick={props.hideShowCart} className={style["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
