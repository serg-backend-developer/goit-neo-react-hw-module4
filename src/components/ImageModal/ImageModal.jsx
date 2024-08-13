import Modal from "react-modal";

import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ image, onRequestClose, isOpen }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      {image && <image src={image.urls.regular} alt={image.alt_description} />}
      {image && <p>Likes {image.likes} </p>}
    </Modal>
  );
}

export default ImageModal;