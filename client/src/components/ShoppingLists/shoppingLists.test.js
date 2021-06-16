/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../utils/test-utils';
import ShoppingLists from '.';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Shopping List component', () => {
  describe('When is rendered', () => {
    test('Then \'Shopping Lists\' should be in the document', () => {
      render(
        <ShoppingLists />,
      );
      expect(screen.getByText(/Shopping Lists/i)).toBeInTheDocument();
    });
  });
});
