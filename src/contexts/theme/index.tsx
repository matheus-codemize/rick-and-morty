import React, { createContext, useState } from 'react';

import { ThemeContextProps, ThemeProviderProps, ThemeTypeEnum } from './types';

import GlobalStyles from '@/styles/global';
import { darkTheme, lightTheme } from '@/styles/theme';

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeTypeEnum>(ThemeTypeEnum.dark);

  const switchTheme = () => {
    setTheme(prevTheme =>
      ThemeTypeEnum.dark === prevTheme
        ? ThemeTypeEnum.light
        : ThemeTypeEnum.dark,
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
      <GlobalStyles
        theme={theme === ThemeTypeEnum.light ? lightTheme : darkTheme}
      />
    </ThemeContext.Provider>
  );
};
