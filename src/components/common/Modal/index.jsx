import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.scss';

export const Modal = ({ closeModal, location, children }) => {
  const stopPropagetion = (e) => {
    e.stopPropagation();
  };
  return ReactDom.createPortal(
    <div className={s.modalOverlay} onClick={closeModal}>
      <div
        className={location === 'right' ? s.modalRightContent : s.modalBottomContent}
        onClick={(e) => stopPropagetion(e)}
      >
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
};

Modal.propTypes = {
  location: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired
};
