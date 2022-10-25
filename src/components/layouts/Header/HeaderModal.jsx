import PropTypes from 'prop-types';
import { Modal } from 'src/components/common';
import s from './Header.module.scss';
import { useIntl } from 'react-intl';
import { useDimension } from 'src/hooks';
import { BackgroundRadio } from 'src/components/common';
import { TABLET_WIDTH_BREAKPOINT } from 'src/constants';
import { useState } from 'react';

export const HeaderModal = ({ closeModalHandler }) => {
  const { formatMessage } = useIntl();
  const { width } = useDimension();

  const [theme, setTheme] = useState({
    color: 'light',
    background: 'dark'
  });

  const { background } = theme;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setTheme((prevState) => ({ ...prevState, [name]: value }));
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
          <BackgroundRadio
            backgroundColor="#fff"
            color="#fff"
            value="light"
            defaultChecked={background === 'light'}
          />
          <BackgroundRadio
            backgroundColor="#000000"
            color="#000"
            value="dark"
            defaultChecked={background === 'dark'}
          />
          <BackgroundRadio
            backgroundColor="#f6edd4"
            color="#fcf5e5"
            value="parchment"
            defaultChecked={background === 'parchment'}
            label="hello"
          />
        </div>
      </div>
    </Modal>
  );
};

HeaderModal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired
};
