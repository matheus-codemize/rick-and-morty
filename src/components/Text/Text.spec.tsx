import { render } from '@testing-library/react';

import Text from '.';

const text = 'Olá mundo';

describe('Text', () => {
  test('should render text correctly', () => {
    const { getByText } = render(<Text>{text}</Text>);
    const textElement = getByText(text);
    expect(textElement).toBeInTheDocument();
  });
});
