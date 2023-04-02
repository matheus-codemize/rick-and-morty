import React, { createContext, useEffect, useState } from 'react';

import {
  ScreenContextProps,
  ScreenProviderProps,
  ScreenWindowSize,
} from './types';

export const ScreenContext = createContext<ScreenContextProps>(
  {} as ScreenContextProps,
);

export const ScreenProvider: React.FC<ScreenProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [direction, setDirection] = useState<'row' | 'column'>('column');
  const [size, setSize] = useState<ScreenWindowSize>({} as ScreenWindowSize);

  useEffect(() => {
    function onResize() {
      const { innerWidth: width, innerHeight: height } = window;
      const conditionToMobile = width <= 768;

      setIsMobile(conditionToMobile);
      setDirection(conditionToMobile ? 'column' : 'row');
      setSize(prevSize => ({ ...prevSize, width, height }));
    }

    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ size, direction, isMobile }}>
      {children}
    </ScreenContext.Provider>
  );
};
