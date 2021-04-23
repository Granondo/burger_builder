import React from "react";

import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientsKey) => {
      return [...Array(props.ingredients[ingredientsKey])].map((_, index) => {
        return <BurgerIngredient key={ingredientsKey + index} type={ingredientsKey} />;
      });
    })
    .reduce((acc, rec) => {
      return acc.concat(rec);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
