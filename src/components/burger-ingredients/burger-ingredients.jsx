import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import React from "react";
import IngredientItem from "./ingredient-item/ingredient-item";
import { data } from "../../utils/data";
import IngredientGroup from "./ingredient-group/ingredient-group";

function BurgerIngredients() {
  const [current, setCurrent] = React.useState("one");
  const bunItems = data.filter(item => item.type === 'bun');
  const sauceItems = data.filter(item => item.type === 'sauce');
  const mainItems = data.filter(item => item.type === 'main');

  return (
    <section className={styles["container"]}>
      <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
      <div className={`${styles.tab} pb-10`}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <div className={`${styles["container-scroll"]} custom-scroll`}>
        <IngredientGroup title={"Булки"}>
          {bunItems.map((item) => (
            <IngredientItem
            image={item.image}
            name={item.name}
            price={item.price}
            counter={1}
            key={item._id}
          />
          ))}
        </IngredientGroup>

        <IngredientGroup title={"Соусы"}>
          {sauceItems.map((item) => (
          <IngredientItem
            image={item.image}
            name={item.name}
            price={item.price}
            key={item._id}
          />))}
        </IngredientGroup>

        <IngredientGroup title={"Начинки"}>
          {mainItems.map((item) => (
            <IngredientItem
            image={item.image}
            name={item.name}
            price={item.price}
            key={item._id}
          />
          ))}
        </IngredientGroup>
      </div>
    </section>
  );
}

export default BurgerIngredients;
