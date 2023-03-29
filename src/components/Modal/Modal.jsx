import PropTypes from 'prop-types';
import css from './Modal.module.css';
export default function Modal({ imageModal, tagModal, onHide }) {
  return (
    <div onClick={onHide} className={css.overlay}>
      <div className={css.modal}>
        <img className="Modal-container" src={imageModal} alt={tagModal} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  imageModal: PropTypes.string.isRequired,
  tagModal: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
};
