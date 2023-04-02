import React from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Icon from '.';

xdescribe('Icon component', () => {
  it('renders the icon with the correct name', () => {
    const { getByLabelText } = render(<Icon name="heart" />);
    const icon = getByLabelText('heart');
    expect(icon).toBeInTheDocument();
  });

  it('renders the icon with the correct size', () => {
    const { getByLabelText } = render(<Icon name="heart" size={32} />);
    const icon = getByLabelText('heart');
    expect(icon).toHaveAttribute('width', '32');
    expect(icon).toHaveAttribute('height', '32');
  });

  it('renders the icon with the correct color', () => {
    const { getByLabelText } = render(<Icon name="heart" color="red" />);
    const icon = getByLabelText('heart');
    expect(icon).toHaveAttribute('fill', 'red');
  });
});
