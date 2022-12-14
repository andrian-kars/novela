import { Burger, Heading, Button } from 'src/components/common';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import { HeaderModal } from './HeaderModal';

export const Header = () => {
  const { formatMessage } = useIntl();

  const [triggerBurger, setTriggerBurger] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

        {isModalOpen && <HeaderModal closeModalHandler={closeModalHandler} />}
      </div>
    </header>
  );
};
