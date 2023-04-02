import React from 'react';

import { render } from '@testing-library/react';

import Title from '.';

const text = 'Olá, mundo!';

describe('Title', () => {
  test('renderiza o texto do título', () => {
    const { getByText } = render(<Title>{text}</Title>);
    const titleElement = getByText(text);

    expect(titleElement).toBeInTheDocument();
  });

  test('renderiza o título com a tag correta', () => {
    const { getByText } = render(<Title level={2}>{text}</Title>);
    const titleElement = getByText(text);

    expect(titleElement.tagName).toBe('H2');
  });
});
