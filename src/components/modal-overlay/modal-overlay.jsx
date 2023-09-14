import styles from './modal-overlay.module.css';
import PropTypes from "prop-types";

function ModalOverlay({onClose, children}) {
    return (
        <div className={styles["modal-overlay"]} onClick={onClose}>
        </div>
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default ModalOverlay;
