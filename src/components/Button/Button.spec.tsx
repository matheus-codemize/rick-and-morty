import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Button from '.';

const text = 'Clique aqui';

describe('Button', () => {
  it('renderiza o botão com o texto correto', () => {
    const { getByText } = render(<Button>{text}</Button>);

    expect(getByText(text)).toBeInTheDocument();
  });

  it('chama a função de clique quando o botão é clicado', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>{text}</Button>);

    fireEvent.click(getByText(text));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
