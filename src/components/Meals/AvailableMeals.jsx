import React from "react";
import style from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "ROG Gaming",
    description: "the best device for gaming",
    price: 999.45,
  },
  {
    id: "m2",
    name: "PlayStation 5",
    description: "no game no life",
    price: 467.42,
  },
  {
    id: "m3",
    name: "Iphone 13 Pro",
    description: "the biggest pro cameras",
    price: 242.44,
  },
  {
    id: "m5",
    name: "Tesla X",
    description: "experience lightning-fast",
    price: 18846.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={style.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
