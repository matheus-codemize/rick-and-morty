import React from 'react';

import textStyle from './styles';
import { TextProps } from './types';

const Text: React.FC<TextProps> = props => {
  const { noBreakLine, ...rest } = props;
  const { styles, className } = textStyle(rest);

  return (
    <React.Fragment>
      {styles}
      <p {...rest} className={`${className}${noBreakLine ? ' nowrap' : ''}`} />
    </React.Fragment>
  );
};

Text.defaultProps = {
  align: 'left',
};

export * from './types';

export default Text;
