import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

test('renders App component', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId('app-layout');
  expect(linkElement).toBeInTheDocument();
});
