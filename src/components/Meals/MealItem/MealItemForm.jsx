import React from "react";
import style from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const input = {
    id: "amount_" + props.id,
    label: "buy",
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };
  return (
    <form className={style.form}>
      <Input label="Amount" input={input} />
      <button className={style.button}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
