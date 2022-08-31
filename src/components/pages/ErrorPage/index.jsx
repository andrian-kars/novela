import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/common';
import s from './ErrorPage.module.scss';

export const ErrorPage = ({ errorCode }) => {
  let title, subTitle;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1) || navigate('/');
  };

  switch (errorCode) {
    case '400':
      title = 'Invalid request.';
      subTitle = 'The server cannot process your request.';
      break;
    case '403':
      title = 'Forbidden.';
      subTitle = 'Access to the resource is restricted.';
      break;
    case '404':
      title = 'This page was not found.';
      subTitle = 'The requested page does not exist.';
      break;
    case '500':
      title = 'Server error';
      subTitle = 'There is a specific problem on the server.';
      break;
    case '502':
      title = 'Gateway error.';
      subTitle = 'An invalid response was received from another server.';
      break;
    case '503':
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
