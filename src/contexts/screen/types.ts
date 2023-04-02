export type ScreenWindowSize = {
  width: number;
  height: number;
};

export type ScreenProviderProps = {
  children: React.ReactNode;
};

export type ScreenContextProps = {
  isMobile: boolean;
  size: ScreenWindowSize;
  direction: 'row' | 'column';
};
