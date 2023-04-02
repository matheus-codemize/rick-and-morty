import React, { useEffect, useState } from 'react';

import Icon from '../Icon';
import Text from '../Text';

import styles from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = props => {
  const { label, value, startFullHeight, onChange, options = [] } = props;

  const [showOptions, setShowOptions] = useState<boolean>(false);

  useEffect(() => {
    setShowOptions(false);
  }, [value]);

  const handleOptions = () => {
    if (options.length) {
      setShowOptions(prevValue => !prevValue);
    }
  };

  return (
    <React.Fragment>
      <style jsx>{styles}</style>
      <div
        onClick={handleOptions}
        className={`floating-input${!value ? ' empty' : ''}`}>
        <label htmlFor={`input ${label}`}>{label}</label>
        <input
          id={`input ${label}`}
          type="text"
          value={value}
          placeholder={label}
          disabled={!!options.length}
          onChange={event => onChange(event.target.value)}
          className={startFullHeight ? 'start-full-height' : ''}
        />
        {!!options.length && (
          <>
            {!!value && (
              <div
                className="icon-close"
                title="Remove selection"
                onClick={event => {
                  event.stopPropagation();

                  onChange('');
                  setShowOptions(false);
                }}>
                <Icon name="close" />
              </div>
            )}
            <ul className={`options ${showOptions ? 'show' : 'hidden'}`}>
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    onChange(option.value);
                    setShowOptions(false);
                  }}>
                  <Text size="md">{option.label}</Text>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export * from './types';

export default Input;
