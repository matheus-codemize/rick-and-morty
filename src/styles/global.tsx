import React from 'react';

import { Global, css } from '@emotion/react';

import { ThemeProps } from './theme';

interface GlobalStylesProps {
  theme: ThemeProps;
}

const formatObjectTheme = (base: string, data: any): string =>
  Object.entries(data)
    .map(([key, value]) => `--${base}-${key}: ${value};`)
    .join('');

const GlobalStyles: React.FC<GlobalStylesProps> = ({ theme }) => (
  <Global
    styles={css`
      :root {
        ${formatObjectTheme('color', theme.colors)}
        ${formatObjectTheme('font-size', theme.font.sizes)}
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body {
        max-width: 100vw;
        overflow: hidden;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        line-height: 1.2;
        font-family: ${theme.font.family.title};
      }

      body {
        font-size: 16px;
        line-height: 1.5;
        color: ${theme.colors.font};
        font-family: ${theme.font.family.body};
        background: ${theme.colors.background};
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      ::-webkit-scrollbar {
        width: 8px;
        z-index: 1;
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.3);
      }

      ::-webkit-scrollbar-track {
        border-radius: 8px;
        background-color: rgba(245, 245, 245, 0.1);
      }

      ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.5);
      }
    `}
  />
);

export default GlobalStyles;
