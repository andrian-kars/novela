import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.scss';

export const Modal = ({ closeModal, location }) => {
  return ReactDom.createPortal(
    <div className={s.modalOverlay} onClick={closeModal}>
      <div
        className={location === 'right' ? s.modalRightContent : s.modalBottomContent}
        onClick={(e) => e.stopPropagation()}
      >
        <p>Modal</p>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

Modal.propTypes = {
  location: PropTypes.string,
  closeModal: PropTypes.func
};
