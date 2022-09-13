import PropTypes from 'prop-types';
import s from './Modal.module.scss';
import { Portal } from 'src/components/common';

export const Modal = ({ closeModalHandler, location, children }) => {
  const stopPropagetion = (e) => {
    e.stopPropagation();
  };
  return (
    <Portal>
      <div className={s.modalOverlay} onClick={closeModalHandler}>
        <div
          className={location === 'right' ? s.modalRightContent : s.modalBottomContent}
          onClick={(e) => stopPropagetion(e)}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

Modal.propTypes = {
  location: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  closeModalHandler: PropTypes.func.isRequired
};
