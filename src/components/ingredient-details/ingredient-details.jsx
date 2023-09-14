import styles from "./ingredient-details.module.css";
import IngredientInfo from "./ingredient-info/ingredient-info";
import PropTypes from "prop-types";

function IngredientDetails({ ingredient }) {
  return (
    <div className={styles.container}>
      <p className={`text text_type_main-large pt-10 pr-10 pl-10 ${styles.title}`}>
        Детали ингредиента
      </p>
      <img src={ingredient.image_large} alt={ingredient.name} ></img>
      <p className="text text_type_main-medium pt-4 pb-8">{ingredient.name}</p>
      <div className={`${styles.info} pb-15`}>
        <IngredientInfo text={"Калории,ккал"} info={ingredient.calories} />
        <IngredientInfo text={"Белки, г"} info={ingredient.calories} />
        <IngredientInfo text={"Жиры, г"} info={ingredient.fat} />
        <IngredientInfo text={"Углеводы, г"} info={ingredient.carbohydrates} />
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingredient: PropTypes.object.isRequired,
};

export default IngredientDetails;
