import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import React from "react";
import IngredientItem from "./ingredient-item/ingredient-item";
import IngredientGroup from "./ingredient-group/ingredient-group";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import ModalOverlay from "../modal-overlay/modal-overlay";

function BurgerIngredients({ ingredients }) {
  const [current, setCurrent] = React.useState("one");

  const bunItems = ingredients.filter((item) => item.type === "bun");
  const sauceItems = ingredients.filter((item) => item.type === "sauce");
  const mainItems = ingredients.filter((item) => item.type === "main");

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [ingredient, setIngredient] = React.useState(null);

  const openModal = (item) => {
    setIngredient(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen();
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
              onClick={() => openModal(item)}
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
              onClick={() => openModal(item)}
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
              onClick={() => openModal(item)}
            />
          ))}
        </IngredientGroup>
      </div>
      {isModalOpen && (
          <ModalOverlay onClose={closeModal}>
            <Modal onClose={closeModal}>
            <IngredientDetails ingredients={ingredient} />
            </Modal>
          </ModalOverlay>
        )}
    </section>
  );
}

export default BurgerIngredients;
