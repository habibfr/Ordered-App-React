import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import { images } from "./components/Static/index";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header src={images.meals} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
