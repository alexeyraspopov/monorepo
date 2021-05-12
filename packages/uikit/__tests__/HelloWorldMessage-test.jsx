import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelloWorldMessage } from '../HelloWorldMessage.jsx';
import '@testing-library/jest-dom/extend-expect';

test('renders message', () => {
  render(<HelloWorldMessage />);
  let message = screen.getByText(/world/i);
  expect(message).toBeInTheDocument();
});
