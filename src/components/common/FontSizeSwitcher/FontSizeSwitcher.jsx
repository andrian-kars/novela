import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from 'src/components/common';
import s from './FontSizeSwitcher.module.scss';

export const FontSizeSwitcher = () => {
  const [fontSize, setFontSize] = useState(14);
  const increase = () => {
    return setFontSize(fontSize + 1);
  };
  const decrease = () => {
    return setFontSize(fontSize - 1);
  };
  return (
    <div className={s.container}>
      <Button handleClick={decrease} disabled={fontSize === 14} className={s.buttonDecrease}>
        -
      </Button>
      <p className={s.fontSizeDisplay}>{fontSize}</p>
      <Button handleClick={increase} disabled={fontSize === 15} className={s.buttonIncrease}>
        +
      </Button>
    </div>
  );
};

FontSizeSwitcher.propTypes = {
  fontSize: PropTypes.number,
};
