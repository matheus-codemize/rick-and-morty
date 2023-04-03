import css from 'styled-jsx/css';

import isValidHex from '@/common/isValidHex';

import { TextProps } from './types';

const styles = ({
  align,
  color,
  size,
  weight,
}: Omit<TextProps, 'children'>) => css.resolve`
  p {
    text-align: ${align};
    font-weight: ${weight};
    font-size: var(--font-size-${size}, ${size});
    color: ${isValidHex(color) ? color : `var(--color-${color})`};
  }

  p.nowrap {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export default styles;
