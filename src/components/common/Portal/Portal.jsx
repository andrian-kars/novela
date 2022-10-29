import PropTypes from 'prop-types';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useEffectOnce } from 'src/hooks';

export const Portal = ({ children }) => {
  const [container] = useState(document.createElement('div'));

  useEffectOnce(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  });

  if (!container) {
    return null;
  }

  return createPortal(children, container);
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
};
