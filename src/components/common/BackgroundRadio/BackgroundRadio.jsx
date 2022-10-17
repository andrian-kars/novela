import PropTypes from 'prop-types';
import s from './BackgroundRadio.module.scss';

export const BackgroundRadio = ({ backgroundColor, color, value, label, defaultChecked }) => (
  <label className={s.radio} style={{ backgroundColor, color }} htmlFor={value}>
    <span>
      <input
        type="radio"
        id={value}
        name="background"
        value={value}
        defaultChecked={defaultChecked}
      />
      <p>{label}</p>
    </span>
  </label>
);

BackgroundRadio.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  defaultChecked: PropTypes.bool
};
