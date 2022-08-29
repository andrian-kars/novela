import { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorPage.module.scss';

export const ErrorPage = ({ error }) => {
  const title = useRef('');
  const subTitle = useRef('');

  switch (error) {
    case '400':
      title.current = ' Invalid request.';
      subTitle.current = 'The server cannot process your request.';
      break;
    case '403':
      title.current = 'Forbidden.';
      subTitle.current = 'Access to the resource is restricted.';
      break;
    case '404':
      title.current = 'This page was not found.';
      subTitle.current = 'The requested page does not exist.';
      break;
    case '500':
      title.current = 'Server error';
      subTitle.current = 'There is a specific problem on the server.';
      break;
    case '502':
      title.current = 'Gateway error.';
      subTitle.current = 'An invalid response was received from another server.';
      break;
    case '503':
      title.current = 'the service is unavailable';
      subTitle.current = 'the server is temporarily unable to process the request';
      break;
    default:
      title.current = 'unknown error';
      subTitle.current = 'an unknown error occurred';
  }

  return (
    <div className={styles.errorPageContainer}>
      <h1>{error}</h1>
      <p>{title.current}</p>
      <p>{subTitle.current}</p>
    </div>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.string
};
