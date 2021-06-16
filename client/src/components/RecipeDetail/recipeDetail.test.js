/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import RecipeDetail from './index';
import { loadRecipeById, loadShoppingLists, updateListById } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

const initialStateFull = {
  selectedRecipe: { name: 'Soup' },
  selectedList: { _id: '12' },
  user: { token: '1' },
};

describe('Given a Detail component', () => {
  describe('When is rendered', () => {
    test('Then \'Soup\' should be in the document', () => {
      loadRecipeById.mockReturnValueOnce({
        type: actionTypes.LOAD_RECIPE,
        recipe: {
          title: 'soup',
          sourceUrl: 'http://www.pic.com',
        },
      });
      loadShoppingLists.mockReturnValueOnce({
        type: actionTypes.LOAD_LISTS,
        shoppingLists: { name: 'MyList' },
      });
      render(
        <RecipeDetail />, { initialStateFull },
      );
      expect(screen.getByText(/soup/i)).toBeInTheDocument();
    });
    describe('And Add to Cart button is clicked', () => {
      test('Then updateListById function should be called', () => {
        updateListById.mockReturnValueOnce({
          type: actionTypes.UPDATE_LIST,
          list: {
            name: 'MyList',
          },
        });
        loadShoppingLists.mockReturnValueOnce({
          type: actionTypes.LOAD_LISTS,
          shoppingLists: { name: 'MyList' },
        });
        loadRecipeById.mockReturnValueOnce({
          type: actionTypes.LOAD_RECIPE,
          recipe: {
            title: 'soup',
            sourceUrl: 'http://www.pic.com',
          },
        });
        render(
          <RecipeDetail />, { initialStateFull },
        );
        fireEvent.click(screen.getByTestId('addToCartBtn'));
        expect(updateListById).toHaveBeenCalled();
      });
    });
  });

  // describe('And Add to List button is clicked', () => {
  //   test('Then \'Shopping Lists\' should be in the document', () => {
  //     fireEvent.click(screen.getByTestId('add-btn'));
  //     render(<RecipeDetail />);
  //     expect(/Servings/).toBeInTheDocument();
  //   });
  // });
});
