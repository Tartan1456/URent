import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '.';

test('renders learn react link', () => {
  const { getByText } = render(<HomePage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
