import styles from "./ingredient-item.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

function IngredientItem(props) {
  return (
    <div className={`${styles.container}`} onClick={props.onClick}>
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

IngredientItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  counter: PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default IngredientItem;
