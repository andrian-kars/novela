import { useEffect } from 'react';
import { useIntl } from 'react-intl';

export const InitialPage = () => {
  const { formatMessage } = useIntl();

  useEffect(() => {
    console.log('InitialPage');

    document.title = formatMessage({ id: 'title' });
  }, []);

  return <p>initial</p>;
};
