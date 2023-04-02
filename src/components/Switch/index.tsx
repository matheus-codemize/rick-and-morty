import React from 'react';

import { SwitchProps } from './types';

const Switch: React.FC<SwitchProps> = props => {
  const { onPress } = props;

  return (
    <>
      <style jsx>{`
        .switch {
          width: 60px;
          height: 24px;
          position: relative;
          display: inline-block;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          cursor: pointer;
          transition: 0.4s;
          position: absolute;
          border-radius: 34px;
          background-color: var(--color-primary);
        }

        .slider:before {
          content: '';
          top: 50%;
          left: 4px;
          width: 20px;
          height: 20px;
          transition: 0.4s;
          border-radius: 50%;
          position: absolute;
          background-color: white;
          transform: translateY(-50%);
        }

        input:checked + .slider:before {
          transform: translateY(-50%) translateX(32px);
        }
      `}</style>
      <label className="switch">
        <input type="checkbox" onClick={onPress} />
        <span className="slider" />
      </label>
    </>
  );
};

export default Switch;
