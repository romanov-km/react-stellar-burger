import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useEffect } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from "react-dom";
const modalRoot = document.getElementById("modals");

const Modal = ({ onClose, children }) => {
  
  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>    
        
        <div onClick={onClose} className={styles.closeicon}>
          <CloseIcon type="primary" />
          
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
      </>
    ,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
