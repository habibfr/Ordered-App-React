import React, { useContext, useState } from "react";
import style from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const confirmSubmitHandler = async (userData) => {
    setIsSubmit(true);
    await fetch(
      "https://meals-react-9c13c-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );

    setIsSubmit(false);
    setDidSubmit(true);
    cartCtx.clearData();
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

  const ModalAction = (
    <div className={style.actions}>
      <button onClick={props.hideShowCart} className={style["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button className={style.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const modalContent = (
    <React.Fragment>
      {cartItems}
      <div className={style.total}>
        <span>Total Amounts</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onConfirm={confirmSubmitHandler}
          onCancel={props.hideShowCart}
        />
      )}
      {!isCheckout && ModalAction}
    </React.Fragment>
  );

  const isSubmiting = <p>Sending order data...</p>;

  const submitContent = (
    <React.Fragment>
      <p>Succesfully order!</p>
      <div className={style.actions}>
        <button onClick={props.hideShowCart} className={style.button}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal>
      {!isSubmit && !didSubmit && modalContent}
      {isSubmit && isSubmiting}
      {!isSubmit && didSubmit && submitContent}
    </Modal>
  );
};

export default Cart;
