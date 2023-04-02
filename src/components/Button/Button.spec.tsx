import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  it('renderiza o botão com o texto correto', () => {
    const texto = 'Clique aqui';
    const { getByText } = render(<Button>{texto}</Button>);

    expect(getByText(texto)).toBeInTheDocument();
  });

  it('chama a função de clique quando o botão é clicado', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button onClick={onClick}>Clique aqui</Button>,
    );

    fireEvent.click(getByText('Clique aqui'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
