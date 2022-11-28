import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ContextHelper } from 'src/helpers/ContextHelper';

import s from './Main.module.scss';

export const Main = ({ children }) => {
  const { fontSize } = useContext(ContextHelper);

  return (
    <main className={s.main}>
      <div style={{ fontSize: `${fontSize}px` }} className={s.container}>
        {children}
      </div>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
