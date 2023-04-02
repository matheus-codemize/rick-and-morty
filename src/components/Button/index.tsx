import React from 'react';

import Text from '../Text';

import buttonStyle from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = props => {
  const { variant, children, block, ...rest } = props;

  const { className, styles } = buttonStyle(rest);

  return (
    <React.Fragment>
      {styles}
      <button
        {...rest}
        className={`${className}${block ? ' block' : ''} variant-${variant}`}>
        {children && (
          <Text size="sm" weight="600" align="center">
            {children}
          </Text>
        )}
      </button>
    </React.Fragment>
  );
};

Button.defaultProps = {
  type: 'button',
  shape: 'square',
  variant: 'contained',
};

export * from './types';

export default Button;
