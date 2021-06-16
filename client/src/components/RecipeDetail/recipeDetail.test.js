/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import RecipeDetail from './index';
import {
  loadRecipeById, loadShoppingLists, updateListById, deleteRecipeById,
} from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

const initialStateFull = {
  selectedRecipe: { title: 'Soup', image: 'www.image.es' },
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
    describe('And when Add to Cart button is clicked', () => {
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
    describe('And when Remove from Favs button is clicked', () => {
      test('Then deleteRecipeById function should be called', () => {
        loadRecipeById.mockReturnValueOnce({
          type: actionTypes.LOAD_RECIPE,
          recipe: {
            title: 'Soup',
            sourceUrl: 'http://www.pic.com',
            image: 'www.image.es',
          },
        });
        loadShoppingLists.mockReturnValueOnce({
          type: actionTypes.LOAD_LISTS,
          shoppingLists: { name: 'MyList' },
        });
        render(
          <RecipeDetail />, { initialStateFull },
        );
        fireEvent.click(screen.getByTestId('bookmark-btn'));
        expect(deleteRecipeById).toHaveBeenCalled();
      });
    });
  });
});
