import React from "react";
import Header from "./components/Layout/Header";
import { images } from "./components/Static/index";

function App() {
  return (
    <div>
      <Header src={images.meals} alt="meals" />
    </div>
  );
}

export default App;
