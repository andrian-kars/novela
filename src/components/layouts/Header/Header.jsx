import PropTypes from 'prop-types';
import { Burger, Heading, Button, Modal } from 'src/components/common';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useDimension } from 'src/hooks';
import { BackgroundRadio } from 'src/components/common';
import { TABLET_WIDTH_BREAKPOINT } from 'src/constants';

export const Header = ({ color, background }) => {
  const { formatMessage } = useIntl();
  const [triggerBurger, setTriggerBurger] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width } = useDimension();

  const openModalHandler = () => setIsModalOpen(true);

  const closeModalHandler = () => setIsModalOpen(false);

  return (
    <header id="top" className={s.whrapper}>
      <div className={s.left}>
        <NavLink to={'/'} className={s.whrapperHomeLink}>
          <Heading type="h1" content={formatMessage({ id: 'appName' })} className={s.heading} />
        </NavLink>
        <div className={s.burgerNav}>
          <Burger isActive={triggerBurger} setIsActive={setTriggerBurger} />
        </div>
        <Button handleClick={openModalHandler}>open modal</Button>
        {isModalOpen && (
          <Modal
            color={color}
            background={background}
            closeModalHandler={closeModalHandler}
            location={TABLET_WIDTH_BREAKPOINT < width ? 'right' : 'bottom'}
          >
            <div>
              <p>{formatMessage({ id: 'themeSwitchHeader' })}</p>
              <div className={s.themeSwitchContainer}>
                <BackgroundRadio backgroundColor="#fff" color="#fff" value="light" />
                <BackgroundRadio backgroundColor="#000000" color="#000" value="dark" />
                <BackgroundRadio backgroundColor="#f6edd4" color="#fcf5e5" value="parchment" />
              </div>
            </div>
          </Modal>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  background: PropTypes.oneOf(['light', 'dark', 'parchment']),
  color: PropTypes.oneOf(['light', 'dark', 'parchment'])
};
