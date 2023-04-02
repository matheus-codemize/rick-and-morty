import React from 'react';

import styles from './styles';
import { TitleProps } from './types';

import isValidHex from '@/common/isValidHex';

const Title: React.FC<TitleProps> = props => {
  const { align, level, lineColor, lineGap, children } = props;

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <React.Fragment>
      <style jsx>{styles}</style>
      <div
        className={`divider ${lineColor ? 'show' : 'hidden'}`}
        style={{
          backgroundColor: isValidHex(lineColor)
            ? lineColor
            : `var(--color-${lineColor})`,
        }}
      />
      <Tag
        className="title"
        style={{ textAlign: align, marginLeft: lineColor ? lineGap : 0 }}>
        {children}
      </Tag>
    </React.Fragment>
  );
};

Title.defaultProps = {
  level: 1,
  lineGap: 16,
};

export * from './types';

export default Title;
