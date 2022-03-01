import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import { images } from "./components/Static/index";

function App() {
  return (
    <Fragment>
      <Header src={images.meals} />
    </Fragment>
  );
}

export default App;
