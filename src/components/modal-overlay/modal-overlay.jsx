import styles from './modal-overlay.module.css';
import PropTypes from "prop-types";

function ModalOverlay({onClose, children}) {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(); // закрываем модальное окно при клике на оверлей
        }
    }
    return (
        <div className={styles["modal-overlay"]} onClick={handleOverlayClick}>
            {children}
        </div>
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default ModalOverlay;
