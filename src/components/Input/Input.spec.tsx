import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from '.';

const labelText = 'Name';

describe('Input', () => {
  test('renders input and label with correct initial state', () => {
    const { getByText } = render(
      <Input label={labelText} value="" onChange={console.log} />,
    );
    const labelElement = getByText(labelText);
    const inputElement = labelElement.nextSibling as HTMLInputElement;

    expect(labelElement.textContent).toBe(labelText);
    expect(inputElement?.value).toBe('');
  });

  test('updates input value when user types', () => {
    let value = '';
    const setValue = (newValue: string) => {
      value = newValue;
    };

    const { getByText } = render(
      <Input label={labelText} value={value} onChange={setValue} />,
    );
    const labelElement = getByText(labelText);
    const inputElement = labelElement.nextSibling as HTMLInputElement;

    const testValue = 'set new value';
    fireEvent.change(inputElement, { target: { value: testValue } });

    expect(value).toBe(testValue);
  });
});
