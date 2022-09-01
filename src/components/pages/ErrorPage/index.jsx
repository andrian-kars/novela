import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/common';
import {
  ERROR_CODE_400,
  ERROR_CODE_403,
  ERROR_CODE_404,
  ERROR_CODE_500,
  ERROR_CODE_502,
  ERROR_CODE_503
} from '../../../constans';
import s from './ErrorPage.module.scss';

export const ErrorPage = ({ errorCode }) => {
  let title, subTitle;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1) || navigate('/');
  };

  switch (errorCode) {
    case ERROR_CODE_400:
      title = 'Invalid request.';
      subTitle = 'The server cannot process your request.';
      break;
    case ERROR_CODE_403:
      title = 'Forbidden.';
      subTitle = 'Access to the resource is restricted.';
      break;
    case ERROR_CODE_404:
      title = 'This page was not found.';
      subTitle = 'The requested page does not exist.';
      break;
    case ERROR_CODE_500:
      title = 'Server error';
      subTitle = 'There is a specific problem on the server.';
      break;
    case ERROR_CODE_502:
      title = 'Gateway error.';
      subTitle = 'An invalid response was received from another server.';
      break;
    case ERROR_CODE_503:
      title = 'the service is unavailable';
      subTitle = 'the server is temporarily unable to process the request';
      break;
    default:
      title = 'unknown error';
      subTitle = 'an unknown error occurred';
  }

  return (
    <div className={s.errorPageContainer}>
      <h1>{errorCode}</h1>
      <p>{title}</p>
      <p>{subTitle}</p>
      <Button label="button" handleClick={handleBack} />
    </div>
  );
};

ErrorPage.propTypes = {
  errorCode: PropTypes.string
};
