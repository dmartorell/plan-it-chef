import axios from 'axios';
import { loadRecipes, loadRecipeById } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('Given a loadRecipes function', () => {
  describe('When invoked without a title argument', () => {
    test('It should return a list of all the recipes', async () => {
      axios.mockResolvedValue({ data: [{ id: '12' }] });
      const dispatch = jest.fn();
      await loadRecipes()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_RECIPES,
        recipes: [{ id: '12' }],
      });
    });
    test('It should dispatch LOAD_HEROES_ERROR', async () => {
      axios.mockRejectedValue();
      const dispatch = jest.fn();
      await loadRecipes()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOAD_RECIPES_ERROR',
      });
    });
  });
});

describe('Given a loadRecipes function', () => {
  describe('When invoked with a title argument', () => {
    test('It should return one or more objects with that title', async () => {
      axios.mockResolvedValue({ data: [{ title: 'paella' }] });
      const dispatch = jest.fn();
      await loadRecipes('paella')(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_RECIPES,
        recipes: [{ title: 'paella' }],
      });
    });
    test('It should dispatch LOAD_HEROES_ERROR', async () => {
      axios.mockRejectedValue();
      const dispatch = jest.fn();
      await loadRecipes()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOAD_RECIPES_ERROR',
      });
    });
  });
});

describe('Given a loadRecipeById function', () => {
  describe('When invoked', () => {
    test('It should dispatch LOAD_RECIPE', async () => {
      axios.mockResolvedValue({ data: [{ id: '12' }] });
      const dispatch = jest.fn();
      await loadRecipeById('12')(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_RECIPE,
        recipe: [{ id: '12' }],
      });
    });
    test('It should dispatch LOAD_RECIPE_ERROR', async () => {
      axios.mockRejectedValue();
      const dispatch = jest.fn();
      await loadRecipeById('12')(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOAD_RECIPE_ERROR',
      });
    });
  });
});
