import React from 'react';
import { render } from '@testing-library/react';
import Home from '.';

test('renders Home component', () => {
  const { getByTestId } = render(<Home />);
  const linkElement = getByTestId('home-hero');
  expect(linkElement).toBeInTheDocument();
});
