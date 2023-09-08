import styles from "./ingredient-item.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientItem(props) {
  return (
    <div className={`${styles.container}`}>
      {props.counter >= 1 && <Counter count={1} size="default" />}
      <img src={props.image} alt={props.name} className="pl-4 pr-4"></img>
      <div className={`${styles.price} pt-1 pb-3`}>
        <p className="text text_type_digits-default">{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.name} text text_type_main-default`}>
        {props.name}
      </p>
    </div>
  );
}

export default IngredientItem;
