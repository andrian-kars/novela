import PropTypes from 'prop-types';
import s from './BackgroundRadio.module.scss';

export const BackgroundRadio = ({ backgroundColor, color, value, defaultChecked, name }) => (
  <label
    className={`${s.radio} ${defaultChecked ? s.radioChecked : ''}`}
    style={{ backgroundColor, color }}
    htmlFor={value}
  >
    <input type="radio" id={value} name={name} value={value} defaultChecked={defaultChecked} />
  </label>
);

BackgroundRadio.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
};
