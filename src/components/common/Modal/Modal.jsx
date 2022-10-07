import PropTypes from 'prop-types';
import s from './Modal.module.scss';
import { Portal } from 'src/components/common';

export const Modal = ({ closeModalHandler, location, startCloseAnimation, children }) => (
  <Portal>
    <div className={s.modalOverlay} onClick={closeModalHandler} />
    <div
      className={
        location === 'right'
          ? `${s.modalRightContent} ${!startCloseAnimation ? s.closeRightContent : ''}`
          : `${s.modalBottomContent} ${!startCloseAnimation ? s.closeBottomContent : ''}`
      }
    >
      {children}
    </div>
  </Portal>
);

Modal.propTypes = {
  location: PropTypes.oneOf(['right', 'bottom']).isRequired,
  children: PropTypes.element.isRequired,
  startCloseAnimation: PropTypes.bool.isRequired,
  closeModalHandler: PropTypes.func.isRequired
};
