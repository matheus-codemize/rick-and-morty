import css from 'styled-jsx/css';

import { LayoutProps } from './types';

const styles = ({
  size,
  direction,
  backgroundUrl,
}: Omit<Omit<LayoutProps, 'children'>, 'menuType'>) => css.resolve`
  main {
    padding: 32px;
    flex-direction: ${direction};
    gap: ${direction === 'row' ? 8 : 0}px;
    background-image: url('${backgroundUrl}');
    width: ${size?.width ? `${size.width}px` : '100%'};
    height: ${size?.height ? `${size.height}px` : '100%'};
    ${direction === 'row' ? 'padding-right' : 'padding-bottom'}: 0;

    display: flex;
    position: relative;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  main::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--color-backgroundOpacity);
  }
`;

export default styles;
