import PropTypes from 'prop-types';
import { Modal } from 'src/components/common';
import s from './Header.module.scss';
import { useIntl } from 'react-intl';
import { useDimension } from 'src/hooks';
import { BackgroundRadio } from 'src/components/common';
import { TABLET_WIDTH_BREAKPOINT } from 'src/constants';
import { useState } from 'react';
import { themeAdapter } from 'src/helpers/adapters';

const BACKGROUND_THEME_CHOICES = [
  {
    name: 'background',
    value: 'light',
    color: '#fff',
    backgroundColor: '#fff',
  },
  {
    name: 'background',
    value: 'dark',
    color: '#000',
    backgroundColor: '#000',
  },
  {
    name: 'background',
    value: 'parchment',
    color: '#fcf5e5',
    backgroundColor: '#f6edd4',
  },
];

export const HeaderModal = ({ closeModalHandler }) => {
  const { formatMessage } = useIntl();
  const { width } = useDimension();

  const [theme, setTheme] = useState(themeAdapter.theme);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setTheme((prevState) => {
      const newTheme = { ...prevState, [name]: value };
      themeAdapter.theme = newTheme;

      return newTheme;
    });

    document.body.setAttribute(`data-theme-${name}`, value);
  };

  return (
    <Modal
      closeModalHandler={closeModalHandler}
      location={TABLET_WIDTH_BREAKPOINT < width ? 'right' : 'bottom'}
    >
      <div onChange={onChangeHandler}>
        <p>{formatMessage({ id: 'themeSwitchHeader' })}</p>
        <div className={s.themeSwitchContainer}>
          {BACKGROUND_THEME_CHOICES.map(({ value, color, backgroundColor, name }) => (
            <BackgroundRadio
              key={value}
              name={name}
              backgroundColor={backgroundColor}
              color={color}
              value={value}
              defaultChecked={theme.background === value}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

HeaderModal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
};
