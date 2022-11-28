import PropTypes from 'prop-types';
import { Button } from 'src/components/common';
import { fontSizeAdapter } from 'src/helpers/adapters';
import s from './FontSizeSwitcher.module.scss';

export const FontSizeSwitcher = ({ size, setSize, title, max, min }) => {
  const increase = () => {
    const newSize = size + 1;
    fontSizeAdapter.size = newSize;
    setSize(newSize);
  };

  const decrease = () => {
    const newSize = size - 1;
    fontSizeAdapter.size = newSize;
    setSize(newSize);
  };

  return (
    <>
      <p>{title}</p>
      <div className={s.container}>
        <Button handleClick={decrease} disabled={size === min} className={s.buttonDecrease}>
          -
        </Button>
        <p className={s.fontSizeDisplay}>{size}</p>
        <Button handleClick={increase} disabled={size === max} className={s.buttonIncrease}>
          +
        </Button>
      </div>
    </>
  );
};

FontSizeSwitcher.propTypes = {
  size: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  setSize: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};
