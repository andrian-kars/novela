import PropTypes from 'prop-types';
import s from './Burger.module.scss';

export const Burger = ({ isActive, setIsActive }) => (
  <button
    onClick={() => setIsActive(!isActive)}
    className={!isActive ? s.hamburgerIcon : `${s.hamburgerIcon} ${s.active}`}
  >
    <span className={`${s.line} ${s.lineOne}`}></span>
    <span className={`${s.line} ${s.lineTwo}`}></span>
    <span className={`${s.line} ${s.lineThree}`}></span>
  </button>
);

Burger.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
};
