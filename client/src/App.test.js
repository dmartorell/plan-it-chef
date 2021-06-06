/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sign up button', () => {
  render(<App />);
  const button = screen.getByText(/Sign up/i);
  expect(button).toBeInTheDocument();
});
