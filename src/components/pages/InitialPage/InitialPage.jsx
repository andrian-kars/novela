import { useIntl } from 'react-intl';
import { Button } from 'src/components/common';
import { useEffectOnce } from 'src/hooks';

export const InitialPage = () => {
  const { formatMessage } = useIntl();

  useEffectOnce(() => {
    console.log('InitialPage');

    document.title = formatMessage({ id: 'title' });
  });

  return (
    <div>
      <Button>-</Button>
      <Button>16</Button>
      <Button>+</Button>
    </div>
  );
};
