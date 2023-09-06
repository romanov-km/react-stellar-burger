import React from "react";
import styles from "./app-header.module.css";
import {
  Logo,
  ListIcon,
  ProfileIcon,
  BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <>
      <header className={`${styles["app-header"]} ml-10 mr-10 mt-10`}>
        <div className={`${styles["burger-buttons"]} pt-4 pb-4`}>
          <a
            href="#1"
            className={`${styles["burger-link"]} pl-5 pr-5 pt-4 pb-4`}
          >
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default pl-2">Конструктор</p>
          </a>
          <a
            href="#2"
            className={`${styles["burger-link"]} pl-5 pr-5  pt-4 pb-4`}
          >
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive pl-2">Лента заказов</p>
          </a>
        </div>
        <div className={`${styles["logo"]}`}>
        <Logo />
        </div>
        <a
          href="#3"
          className={`${styles["burger-link"]} pl-5 pr-5 pt-4 pb-4`}
        >
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive pl-2">Личный кабинет</p>
        </a>
      </header>
    </>
  );
}

export default AppHeader;
