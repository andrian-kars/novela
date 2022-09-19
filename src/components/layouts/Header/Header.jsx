import { Burger, Heading, Button, Modal } from 'src/components/common';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useDimension } from 'src/hooks';
import { TABLET_WIDTH_BREAKPOINT } from 'src/constants';

export const Header = () => {
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
        {isModalOpen ? (
          <Modal
            closeModalHandler={closeModalHandler}
            location={TABLET_WIDTH_BREAKPOINT < width ? 'right' : 'bottom'}
          >
            <p>Modal content</p>
          </Modal>
        ) : null}
      </div>
    </header>
  );
};