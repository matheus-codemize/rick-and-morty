import css from 'styled-jsx/css';

import { ButtonProps } from './types';

import isValidHex from '@/common/isValidHex';

const styles = ({ color, shape }: Partial<ButtonProps>) => css.resolve`
  button {
    outline: none;
    color: inherit;
    cursor: pointer;
    user-select: none;
    padding: 6px 16px;
    font-size: inherit;
    text-transform: uppercase;
    box-shadow: 1px 1px 5px #212121;
    border-radius: ${shape === 'rounded' ? 5 : shape === 'circle' ? 100 : 0}px;
    border: 2px solid
      ${isValidHex(color)
        ? color
        : `var(--color-${color}, var(--color-emphasis))`};
    background: ${isValidHex(color)
      ? color
      : `var(--color-${color}, var(--color-emphasis))`};
  }

  button.block {
    width: 100%;
  }

  button.variant-outline {
    background: transparent;
    color: ${isValidHex(color)
      ? color
      : `var(--color-${color}, var(--color-emphasis))`};
  }

  button.variant-link {
    box-shadow: none;
    background: transparent;
    border-color: transparent;
  }
`;

export default styles;
