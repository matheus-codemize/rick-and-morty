import React from 'react';

import icons from './icons';
import iconStyle from './styles';
import { IconProps } from './types';

const Icon: React.FC<IconProps> = props => {
  const { name, size, ...rest } = props;

  const { className, styles } = iconStyle(rest);

  const Tag = icons[name] as keyof JSX.IntrinsicElements;

  return (
    <React.Fragment>
      {styles}
      <Tag className={className} width={size} height={size} />
    </React.Fragment>
  );
};

Icon.defaultProps = {
  size: 24,
  color: 'white',
};

export * from './types';

export default Icon;
