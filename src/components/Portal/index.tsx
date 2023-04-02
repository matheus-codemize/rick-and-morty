import React from 'react';

import styles from './styles';
import { PortalProps } from './types';

const Portal: React.FC<PortalProps> = props => {
  const { disableAnimation } = props;

  return (
    <React.Fragment>
      <style jsx>{styles}</style>
      <div className={`portal${disableAnimation ? ' disabled' : ''}`} />
    </React.Fragment>
  );
};

export default Portal;
