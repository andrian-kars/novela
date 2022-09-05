import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.scss';

export const Modal = ({ open, closeModal }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className={s.modalOverlay} onClick={closeModal}>
        <div className={s.modalLeftContent}>
          <p>Modal</p>
        </div>
      </div>
    </>,
    document.getElementById('root')
  );
};

Modal.propTypes = {
  right: PropTypes.string,
  bottom: PropTypes.string,
  open: PropTypes.bool,
  closeModal: PropTypes.func
};
