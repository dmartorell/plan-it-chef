/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../utils/test-utils';
import Header from './index';

describe('Given a Header component', () => {
  describe('When is rendered', () => {
    test('Then the app small logo should be in the document', () => {
      render(
        <Header />,
      );
      expect(screen.getByTestId('logo-sm')).toBeInTheDocument();
    });
  });
});
