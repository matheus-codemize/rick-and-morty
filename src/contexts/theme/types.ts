export enum ThemeTypeEnum {
  light = 'LIGHT',
  dark = 'DARK',
}

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextProps = {
  theme: ThemeTypeEnum;
  switchTheme: () => void;
};
