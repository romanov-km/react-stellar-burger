import styles from "./ingredient-info.module.css";
import ReactPropTypes from "prop-types";

function IngredientInfo({text, info}) {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-default text_color_inactive">
        {text}
      </p>
      <p className="text text_type_main-default text_color_inactive">
        {info}
      </p>
    </div>
  );
}

IngredientInfo.ReactPropTypes = {
  text: ReactPropTypes.string.isRequired,
  info: ReactPropTypes.number.isRequired
}

export default IngredientInfo;
