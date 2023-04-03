import css from 'styled-jsx/css';

import isValidHex from '@/common/isValidHex';

import { IconProps } from './types';

const styles = ({ color }: Partial<IconProps>) => css.resolve`
  svg {
    color: ${isValidHex(color) ? color : `var(--color-${color})`};
  }
`;

export default styles;
