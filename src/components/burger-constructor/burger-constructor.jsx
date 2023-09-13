import BurgerComponents from "./burger-components/burger-components";
import styles from "./burger-constructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor() {
  return (
    <section className={`${styles.container} pl-10 pt-25`}>
      <BurgerComponents />

      <div className={`${styles.order} pt-10 pr-4`}>
        <div className={`${styles.price} pr-10`}>
          <p className="text text_type_digits-medium">600</p>
          <CurrencyIcon type="primary" />
        </div>

        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
