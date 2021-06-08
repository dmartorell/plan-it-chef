/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import Detail from './index';
import loadRecipeById from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Detail component', () => {
  describe('When is rendered', () => {
    test('Then \'Ingredients\' should be in the document', () => {
      const selectedRecipe = { _id: '123' };
      loadRecipeById.mockReturnValueOnce({
        type: actionTypes.LOAD_RECIPE,
        recipe: { id: '123' },
      });
      render(
        <Detail />, selectedRecipe,
      );
      expect(screen.getByText(/No recipes available./i)).toBeInTheDocument();
    });
  });
  describe('When is redered with a recipe as initial state', () => {
    let initialState;
    beforeEach(() => {
      initialState = { recipes: [{ title: 'Broccoli cakes' }] };
      render(<Recipes />, { initialState });
    });
    test('Then the recipe should be in the document', () => {
      loadRecipes.mockReturnValueOnce({
        type: actionTypes.LOAD_RECIPES,
        recipes: initialState,
      });
      render(
        <Recipes />, initialState,
      );
      expect(screen.getByText(/Broccoli/i)).toBeInTheDocument();
    });

    describe('And search button is clicked', () => {
      test('Then loadRecipes function should be invoked', () => {
        loadRecipes.mockImplementationOnce(() => ({
          type: actionTypes.LOAD_RECIPES,
          recipes: initialState,
        }));

        fireEvent.click(screen.getByTestId('search-btn'));
        expect(loadRecipes).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a Recipes component', () => {
  describe('When is rendered with empty initial state', () => {
    test('Then \'No recipes available.\' should be in the document', () => {
      const initialState = { recipes: [] };
      loadRecipes.mockReturnValueOnce({
        type: actionTypes.LOAD_RECIPES,
        recipes: [],
      });
      render(
        <Recipes />, initialState,
      );
      expect(screen.getByText(/No recipes available./i)).toBeInTheDocument();
    });
  });
});
