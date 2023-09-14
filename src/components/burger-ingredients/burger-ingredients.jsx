import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import React from "react";
import IngredientItem from "./ingredient-item/ingredient-item";
import IngredientGroup from "./ingredient-group/ingredient-group";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import PropTypes from "prop-types";
import { useModal } from "../hooks/useModal";

function BurgerIngredients({ ingredients }) {
  const [current, setCurrent] = React.useState("one");
  const [ingredient, setIngredient] = React.useState(null);
  const { isModalOpen, openModal, closeModal } = useModal();

  const bunItems = ingredients.filter((item) => item.type === "bun");
  const sauceItems = ingredients.filter((item) => item.type === "sauce");
  const mainItems = ingredients.filter((item) => item.type === "main");

  const handleIngredientClick = (item) => {
    setIngredient(item);
    openModal();
  };


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
              onClick={() => handleIngredientClick(item)}
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
              onClick={() => handleIngredientClick(item)}
            />
          ))}
        </IngredientGroup>

        <IngredientGroup title={"Начинки"}>
          {mainItems.map((item) => (
            <IngredientItem
              image={item.image}
              name={item.name}
              price={item.price}
              key={item._id}
              onClick={() => handleIngredientClick(item)}
            />
          ))}
        </IngredientGroup>
      </div>
      {isModalOpen && (
          
            <Modal onClose={closeModal}>
            <IngredientDetails ingredient={ingredient} />
            </Modal>
          
        )}
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default BurgerIngredients;
