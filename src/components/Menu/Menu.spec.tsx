import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import Menu from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Menu', () => {
  it('renderiza os itens de menu corretamente', () => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: '/',
    }));

    render(<Menu direction="column" />);

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const charactersLink = screen.getByText('Characters');
    expect(charactersLink).toBeInTheDocument();

    const locationsLink = screen.getByText('About');
    expect(locationsLink).toBeInTheDocument();
  });
});
