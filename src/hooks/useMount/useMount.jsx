import { useState, useEffect } from 'react';
import { MODAL_ANIMATION_TIME } from 'src/constants';

export const useMount = (opened) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, MODAL_ANIMATION_TIME);
    }
  }, [opened]);
  return {
    mounted
  };
};
