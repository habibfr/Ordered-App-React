import React, { useState } from "react";
import Header from "./components/Layout/Header";
import { images } from "./components/Static/index";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showHandleCart = () => setCartIsShown(true);
  const hideHandlerCart = () => setCartIsShown(false);

  return (
    <CartProvider>
      {cartIsShown ? <Cart hideShowCart={hideHandlerCart} /> : ""}
      <Header src={images.meals} showCart={showHandleCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
