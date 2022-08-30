import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export const Button = ({ className, label, handleClick, disabled, type = 'button' }) => (
  <button
    className={className ? className : styles.content}
    type={type}
    disabled={disabled}
    onClick={handleClick}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  className: PropTypes.string,
  handleClick: PropTypes.func
};
