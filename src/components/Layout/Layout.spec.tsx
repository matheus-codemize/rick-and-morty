import React from 'react';

import { render } from '@testing-library/react';
import { useRouter } from 'next/router';

import Layout from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Layout component', () => {
  it('renders the children content', () => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: '/',
    }));

    const { getByText } = render(
      <Layout
        direction="row"
        size={{ width: 1200, height: 600 }}
        backgroundUrl="/background.jpg">
        Some content
      </Layout>,
    );
    const content = getByText('Some content');

    expect(content).toBeInTheDocument();
  });
});
