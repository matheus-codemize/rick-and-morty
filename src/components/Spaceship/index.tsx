import React from 'react';

import styles from './styles';
import { SpaceshipProps } from './types';

const Spaceship: React.FC<SpaceshipProps> = props => {
  const { disableAnimation } = props;

  return (
    <React.Fragment>
      <style jsx>{styles}</style>
      <div className={`spaceship${disableAnimation ? ' disabled' : ''}`} />
    </React.Fragment>
  );
};

export default Spaceship;
