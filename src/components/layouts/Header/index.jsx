import { Burger, Heading } from 'src/components/common';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import { Button } from 'src/components/common/Button';
import { Modal } from '../../common/Modal';

export const Header = () => {
  const { formatMessage } = useIntl();
  const [triggerBurger, setTriggerBurger] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const modalHandler = () => {
    setIsOpenModal(!isOpenModal);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <header id="top" className={s.whrapper}>
      <div className={s.left}>
        <NavLink to={'/'} className={s.whrapperHomeLink}>
          <Heading type="h1" content={formatMessage({ id: 'appName' })} className={s.heading} />
        </NavLink>
        <div className={s.burgerNav}>
          <Burger isActive={triggerBurger} setIsActive={setTriggerBurger} />
        </div>
        <Button handleClick={modalHandler}>
          <p>open modal</p>
        </Button>
        <Modal open={isOpenModal} closeModal={closeModal} />
      </div>
    </header>
  );
};
