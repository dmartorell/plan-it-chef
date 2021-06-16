/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../utils/test-utils';
import Landing from './index';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Login component', () => {
  describe('When is rendered', () => {
    test('Then \'It\'s cooking time!\' should be in the document', () => {
      render(
        <Landing />,
      );
      expect(screen.getByText(/Cooking/i)).toBeInTheDocument();
    });
  });
});
