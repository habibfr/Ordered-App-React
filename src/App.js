import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import { images } from "./components/Static/index";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showHandleCart = () => setCartIsShown(true);
  const hideHandlerCart = () => setCartIsShown(false);

  return (
    <Fragment>
      {cartIsShown ? <Cart hideShowCart={hideHandlerCart} /> : ""}
      <Header src={images.meals} showCart={showHandleCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
