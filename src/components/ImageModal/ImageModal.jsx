import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ description, regular, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.image}>
        <img src={regular} alt={description} />
      </div>

      <div className={css.description}>
        <h3>{description}</h3>
      </div>
    </Modal>
  );
};

export default ImageModal;