import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.scss';

export const Modal = ({ closeModal }) => {
  return ReactDom.createPortal(
    <div className={s.modalOverlay} onClick={closeModal}>
      <div className={s.modalRightContent} onClick={(e) => e.stopPropagation()}>
        <p>Modal</p>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

Modal.propTypes = {
  right: PropTypes.string,
  bottom: PropTypes.string,
  closeModal: PropTypes.func
};
