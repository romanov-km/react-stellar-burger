import BurgerComponents from "./burger-components/burger-components";
import styles from "./burger-constructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from 'prop-types';

function BurgerConstructor({ ingredients }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={`${styles.container} pl-10 pt-25`}>
      <BurgerComponents data={ingredients} />

      <div className={`${styles.order} pt-10 pr-4`}>
        <div className={`${styles.price} pr-10`}>
          <p className="text text_type_digits-medium">600</p>
          <CurrencyIcon type="primary" />
        </div>

        <Button
          onClick={openModal}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
        {isModalOpen && (
          <ModalOverlay onClose={closeModal}>
            <Modal onClose={closeModal}>
              <OrderDetails />
            </Modal>
          </ModalOverlay>
        )}
      </div>
    </section>
  );
}

export default BurgerConstructor;
