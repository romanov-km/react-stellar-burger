import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import React from "react";
import IngredientItem from "./ingredient-item/ingredient-item";
import { data } from "../../utils/data";
import IngredientGroup from "./ingredient-group/ingredient-group";

function BurgerIngredients() {
  const [current, setCurrent] = React.useState("one");
  return (
    <>
      <section className={styles["container"]}>
        <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
        <div style={{ display: "flex" }} className="pb-10">
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
            <IngredientItem
              image={data[0].image}
              name={data[0].name}
              price={data[0].price}
              counter={1}
            />
            <IngredientItem
              image={data[14].image}
              name={data[14].name}
              price={data[14].price}
            />
          </IngredientGroup>

          <IngredientGroup title={"Соусы"}>
            <IngredientItem
              image={data[3].image}
              name={data[3].name}
              price={data[3].price}
            />
            <IngredientItem
              image={data[6].image}
              name={data[6].name}
              price={data[6].price}
            />
            <IngredientItem
              image={data[5].image}
              name={data[5].name}
              price={data[5].price}
              counter={1}
            />
            <IngredientItem
              image={data[9].image}
              name={data[9].name}
              price={data[9].price}
            />
          </IngredientGroup>

          <IngredientGroup title={"Начинки"}></IngredientGroup>
        </div>
      </section>
    </>
  );
}

export default BurgerIngredients;
