import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const Modal = ({ onClose, children }) => (
  <div className={styles.modal}>
    <div onClick={onClose} className={styles.closeicon}>
      <CloseIcon type="primary" />
    </div>
    {children}
  </div>
);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Modal;
