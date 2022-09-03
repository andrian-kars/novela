import PropTypes from 'prop-types';
import s from './Button.module.scss';

export const Button = ({ className, handleClick, disabled, type = 'button', children }) => (
  <button
    className={className ? className : s.content}
    type={type}
    disabled={disabled}
    onClick={handleClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  className: PropTypes.string,
  handleClick: PropTypes.func
};
