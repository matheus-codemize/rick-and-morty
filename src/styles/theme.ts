export interface ThemeProps {
  colors: {
    [key: string]: string;
  };
  font: {
    family: {
      [key: string]: string;
    };
    sizes: {
      [key: string]: string | number;
    };
  };
}

export const lightTheme = {} as ThemeProps;

export const darkTheme: ThemeProps = {
  colors: {
    font: '#FFFFFF',
    primary: '#00FF00',
    background: '#50545F',
    backgroundOpacity: 'rgba(80, 84, 95, 0.5)',
    emphasis: '#FFC107',
    contrast: '#9932CC',
    accent: '#1E90FF ',
    placeholder: '#ebebeb',
  },
  font: {
    family: {
      title: '"Bangers", sans-serif',
      body: '"Roboto", sans-serif',
      quote: '"Spectral", serif',
    },
    sizes: {
      sm: '0.8rem',
      md: '0.875rem',
      h6: '1.25rem',
      h5: '1.563rem',
      h4: '1.953rem',
      h3: '2.441rem',
      h2: '3.052rem',
      h1: '3.815rem',
    },
  },
};
