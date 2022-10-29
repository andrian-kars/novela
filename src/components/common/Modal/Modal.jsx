import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.scss';
import { Portal } from 'src/components/common';
import { MODAL_ANIMATION_TIME } from 'src/constants';

export const Modal = ({ closeModalHandler, location, children }) => {
  const [startCloseAnimation, setStartCloseAnimation] = useState(false);

  const startCloseAnimationHandler = () => {
    setTimeout(() => {
      setStartCloseAnimation(false);
      closeModalHandler();
    }, MODAL_ANIMATION_TIME);
    setStartCloseAnimation(true);
  };

  return (
    <Portal>
      <div className={s.modalOverlay} onClick={startCloseAnimationHandler} />
      <div
        className={
          location === 'right'
            ? `${s.modalRightContent}  ${startCloseAnimation ? s.closeRightContent : ''}`
            : `${s.modalBottomContent} ${startCloseAnimation ? s.closeBottomContent : ''}`
        }
      >
        {children}
      </div>
    </Portal>
  );
};

Modal.propTypes = {
  location: PropTypes.oneOf(['right', 'bottom']).isRequired,
  children: PropTypes.node.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
};
