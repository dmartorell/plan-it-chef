/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import Recipes from './index';
import loadRecipes from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

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
// describe('And Delete button is clicked', () => {
//   test('Then delete task should be invoked', () => {
//     deleteTask.mockImplementationOnce(() => ({
//       type: actionTypes.ADD_TASK,
//       task: initialState,
//     }));

//     fireEvent.click(screen.getByText(/x/i));

//     expect(deleteTask).toHaveBeenCalled();
//   });
// });

// describe('And update button is clicked', () => {
//   test('Then update task should be invoked', () => {
//     updateTask.mockImplementationOnce(() => ({
//       type: actionTypes.ADD_TASK,
//       task: initialState,
//     }));

//     fireEvent.click(screen.getByText(/✓/i));

//     expect(updateTask).toHaveBeenCalled();
//   });
// });
