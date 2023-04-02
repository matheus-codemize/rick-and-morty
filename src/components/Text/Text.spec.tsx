import { render } from '@testing-library/react';

import Text from '.';

const text = 'Olá, mundo!';

describe('Text', () => {
  test('deve renderizar o texto corretamente', () => {
    const { getByText } = render(<Text>{text}</Text>);
    const textElement = getByText(text);
    expect(textElement).toBeInTheDocument();
  });
});
