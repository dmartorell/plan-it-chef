/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import RecipeDetail from './index';
import { loadRecipeById } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Detail component', () => {
  describe('When is rendered', () => {
    test('Then \'Ingredients\' should be in the document', () => {
      loadRecipeById.mockReturnValueOnce({
        type: actionTypes.LOAD_RECIPE,
        recipe: { id: '123' },
      });
      render(
        <RecipeDetail />,
      );
      expect(screen.getByText(/Ingredients/i)).toBeInTheDocument();
    });

    describe('And Add to List button is clicked', () => {
      test('Then \'Shopping Lists\' should be in the document', () => {
        fireEvent.click(screen.getByTestId('add-btn'));
        render(<RecipeDetail />);
        expect(/Servings/).toBeInTheDocument();
      });
    });
  });
});
