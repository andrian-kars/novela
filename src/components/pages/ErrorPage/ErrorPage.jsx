import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/common';
import {
  ERROR_CODE_400,
  ERROR_CODE_403,
  ERROR_CODE_404,
  ERROR_CODE_500,
  ERROR_CODE_502,
  ERROR_CODE_503,
} from 'src/constants';
import s from './ErrorPage.module.scss';

export const ErrorPage = ({ errorCode }) => {
  let title, subTitle;
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  const handleBack = () => {
    navigate(-1) || navigate('/');
  };

  switch (errorCode) {
    case ERROR_CODE_400:
      title = formatMessage({ id: 'error.400.title' });
      subTitle = formatMessage({ id: 'error.400.subTitle' });
      break;
    case ERROR_CODE_403:
      title = formatMessage({ id: 'error.403.title' });
      subTitle = formatMessage({ id: 'error.403.subTitle' });
      break;
    case ERROR_CODE_404:
      title = formatMessage({ id: 'error.404.title' });
      subTitle = formatMessage({ id: 'error.404.subTitle' });
      break;
    case ERROR_CODE_500:
      title = formatMessage({ id: 'error.500.title' });
      subTitle = formatMessage({ id: 'error.500.subTitle' });
      break;
    case ERROR_CODE_502:
      title = formatMessage({ id: 'error.502.title' });
      subTitle = formatMessage({ id: 'error.502.subTitle' });
      break;
    case ERROR_CODE_503:
      title = formatMessage({ id: 'error.503.title' });
      subTitle = formatMessage({ id: 'error.503.subTitle' });
      break;
    default:
      title = formatMessage({ id: 'error.default.title' });
      subTitle = formatMessage({ id: 'error.default.subTitle' });
  }

  return (
    <div className={s.errorPageContainer}>
      <h1>{errorCode}</h1>
      <p>{title}</p>
      <p>{subTitle}</p>
      <Button handleClick={handleBack}>button</Button>
    </div>
  );
};

ErrorPage.propTypes = {
  errorCode: PropTypes.string,
};
