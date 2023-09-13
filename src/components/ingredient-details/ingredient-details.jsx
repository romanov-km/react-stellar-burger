import styles from "./ingredient-details.module.css";
import IngredientInfo from "./ingredient-info/ingredient-info";

function IngredientDetails({ ingredients }) {
  return (
    <div className={styles.container}>
      <p className={`text text_type_main-large pt-10 pr-10 pl-10 ${styles.title}`}>
        Детали ингредиента
      </p>
      <img src={ingredients.image_large} alt={ingredients.name} ></img>
      <p className="text text_type_main-medium pt-4 pb-8">{ingredients.name}</p>
      <div className={`${styles.info} pb-15`}>
        <IngredientInfo text={"Калории,ккал"} info={ingredients.calories} />
        <IngredientInfo text={"Белки, г"} info={ingredients.calories} />
        <IngredientInfo text={"Жиры, г"} info={ingredients.fat} />
        <IngredientInfo text={"Углеводы, г"} info={ingredients.carbohydrates} />
      </div>
    </div>
  );
}

export default IngredientDetails;
