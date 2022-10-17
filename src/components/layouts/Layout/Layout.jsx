import { useState } from 'react';
import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import s from './Layout.module.scss';

export const Layout = ({ children }) => {
  const [theme, setTheme] = useState({
    color: 'light',
    background: 'dark'
  });
  const { background, color } = theme;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTheme((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div
      data-theme-color={color}
      data-theme-background={background}
      className={`${s.background} ${s.color}`}
      onChange={onChangeHandler}
    >
      <Header />
      <Main>{children}</Main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
