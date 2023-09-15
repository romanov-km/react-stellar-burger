import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../../utils/data";
import styles from "./burger-components.module.css";
import PropTypes from 'prop-types';

function BurgerComponents(props) {
  const bunIngredients = props.data.filter((item) => item.type !== "bun");
  
  return (
    <div className={`${styles["burger-components"]} pl-4`}>
      <div className="pl-8">
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={data[0].image}
        />
      </div>
      <div className={`${styles["container-scroll"]} custom-scroll`}>
        {bunIngredients.map((item) => (
          <div className={styles["component-with-icon"]} key={item._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </div>
        ))}
      </div>
      <div className="pl-8">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={data[0].image}
        />
      </div>
    </div>
  );
}

BurgerComponents.propTypes = {
  data: PropTypes.array.isRequired,
}

export default BurgerComponents;
