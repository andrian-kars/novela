import { Burger, Heading } from 'src/components/common';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import { Button } from 'src/components/common/Button';
import { Modal } from 'src/components/common/Modal';
import { useDimension } from 'src/hooks/useDimension';

export const Header = () => {
  const { formatMessage } = useIntl();
  const [triggerBurger, setTriggerBurger] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { width, height } = useDimension();
  console.log(width, height);

  const tabletWidth = 768;

  const openModal = () => {
    setIsOpenModal(true);
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
        <Button handleClick={openModal}>open modal</Button>
        {isOpenModal ? (
          <Modal closeModal={closeModal} location={tabletWidth < width ? 'right' : 'bottom'} />
        ) : null}
      </div>
    </header>
  );
};
