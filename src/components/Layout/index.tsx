import React from 'react';

import Menu from '../Menu';

import layoutStyle from './styles';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = props => {
  const { children, ...rest } = props;
  const { className, styles } = layoutStyle(rest);

  return (
    <React.Fragment>
      {styles}
      <main className={className}>
        {children}
        <Menu direction={rest.direction === 'row' ? 'column' : 'row'} />
      </main>
    </React.Fragment>
  );
};

export * from './types';

export default Layout;
