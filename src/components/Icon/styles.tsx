import css from 'styled-jsx/css';

import { IconProps } from './types';

import isValidHex from '@/common/isValidHex';

const styles = ({ color }: Partial<IconProps>) => css.resolve`
  svg {
    color: ${isValidHex(color) ? color : `var(--color-${color})`};
  }
`;

export default styles;
