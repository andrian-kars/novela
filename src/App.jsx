import { useState } from 'react';
import { Burger } from 'src/components/common';

export const App = () => {
  const [isBurgerActive, setIsBurgeractive] = useState(false);

  return <Burger isActive={isBurgerActive} setIsActive={setIsBurgeractive} />;
};
