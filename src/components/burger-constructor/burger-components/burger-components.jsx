import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../../utils/data";
import styles from "./burger-components.module.css";

function BurgerComponents(props) {
  return (
    <div className={`${styles["burger-components"]} pl-4 pr-4`}>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        className={`pl-8`}
      >
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={data[0].image}
        />
        <div className={`${styles["container-scroll"]} custom-scroll`}>
          <ConstructorElement
            text="Соус традиционный галактический"
            price={30}
            thumbnail={data[5].image}
          />
          <ConstructorElement
            text="Мясо бессмертных моллюсков Protostomia"
            price={300}
            thumbnail={data[4].image}
          />
          <ConstructorElement
            text="Плоды Фалленианского дерева"
            price={50}
            thumbnail={data[7].image}
          />
          <ConstructorElement
            text="Хрустящие минеральные кольца"
            price={80}
            thumbnail={data[8].image}
          />
          <ConstructorElement
            text="Хрустящие минеральные кольца"
            price={80}
            thumbnail={data[8].image}
          />
        </div>

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

export default BurgerComponents;
