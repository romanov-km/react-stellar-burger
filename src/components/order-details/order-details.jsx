import styles from "./order-details.module.css";
import done from "../../../src/images/done.svg";

function OrderDetails() {
  return (
    <div className={styles.container}>
      <p className="text text_type_digits-large pt-30">034536</p>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img src={done} alt="картинка успешного заказа" className="pt-15 pb-15" />
      <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default pb-30 text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}

export default OrderDetails;
