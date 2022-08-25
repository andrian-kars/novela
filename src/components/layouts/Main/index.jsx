import PropTypes from 'prop-types';
import s from './Main.module.scss';

export const Main = ({ children }) => (
  <main className={s.main}>
    <div className={s.container}>{children}</div>
  </main>
);

Main.propTypes = {
  children: PropTypes.element.isRequired
};
