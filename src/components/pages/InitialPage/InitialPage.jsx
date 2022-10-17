import { useIntl } from 'react-intl';
import { useEffectOnce } from 'src/hooks';

export const InitialPage = () => {
  const { formatMessage } = useIntl();

  useEffectOnce(() => {
    document.title = formatMessage({ id: 'title' });
  });

  return (
    <div>
      <p>Initial page</p>
    </div>
  );
};
