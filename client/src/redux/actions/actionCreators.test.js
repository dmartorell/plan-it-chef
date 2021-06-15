import axios from 'axios';
import {
  loadRecipes,
  loadRecipeById,
  loadShoppingLists,
  loadListById,
  updateIngredientsList,
  updateListById,
  signup,
} from './actionCreators';

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
    test('It should dispatch LOAD_RECIPES_ERROR', async () => {
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
    test('It should dispatch LOAD_RECIPES_ERROR', async () => {
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
describe('Given a loadShoppingLists function', () => {
  describe('When invoked', () => {
    test('It should return one or more objects', async () => {
      axios.mockResolvedValue({ data: [{ name: 'myList' }] });
      const dispatch = jest.fn();
      await loadShoppingLists()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_LISTS,
        shoppingLists: [{ name: 'myList' }],
      });
    });
    test('It should dispatch LOAD_LISTS_ERROR', async () => {
      axios.mockRejectedValue();
      const dispatch = jest.fn();
      await loadShoppingLists()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_LISTS_ERROR,
      });
    });
  });
});
describe('Given a loadListById function', () => {
  describe('When invoked', () => {
    test('It should dispatch LOAD_LIST', async () => {
      axios.mockResolvedValue({ data: [{ id: '12' }] });
      const dispatch = jest.fn();
      await loadListById('12')(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_LIST,
        list: [{ id: '12' }],
      });
    });
    test('It should dispatch LOAD_LIST_ERROR', async () => {
      axios.mockRejectedValue();
      const dispatch = jest.fn();
      await loadListById('12')(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_LIST_ERROR,
      });
    });
  });
});
describe('Given a updateIngredientsList function', () => {
  const dispatch = jest.fn();
  test('Should dispatch UPDATE_LIST', async () => {
    axios.put.mockResolvedValue({ data: { ingredients: [{ id: '5' }], name: 'MyList' } });
    await updateIngredientsList()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_LIST,
      list: { ingredients: [{ id: '5' }], name: 'MyList' },
    });
  });

  test('Should dispatch error', async () => {
    axios.mockRejectedValue();
    await updateIngredientsList()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_LIST_ERROR,
    });
  });
});

describe('Given a updateListById function', () => {
  describe('When invoked', () => {
    test('It should dispatch UPDATE_LIST', async () => {
      axios.mockResolvedValue({ data: [{ id: '12' }] });
      const dispatch = jest.fn();
      await updateListById('12')(dispatch);

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
        type: actionTypes.LOAD_RECIPE,
      });
    });
  });
});
describe('Given a signup function', () => {
  const dispatch = jest.fn();
  test('Should dispatch CREATE_USER', async () => {
    axios.put.mockResolvedValue({ name: 'John', id: '12' });
    await signup()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.CREATE_USER,
      user: { name: 'John', id: '12' },
    });
  });

  test('Should dispatch error', async () => {
    axios.mockRejectedValue();
    await signup()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.CREATE_USER_ERROR,
    });
  });
});
