import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021'; // TODO: use ENV VARIABLE

export function loadRecipes(title) {
  return async (dispatch) => {
    try {
      const { data } = title ? await axios(`${url}/recipes/?title=${title}`) : await axios(`${url}/recipes`);
      dispatch({
        type: actionTypes.LOAD_RECIPES,
        recipes: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_RECIPES_ERROR,
      });
    }
  };
}
export function loadRecipeById(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${url}/recipes/${id}`);
      dispatch({
        type: actionTypes.LOAD_RECIPE,
        recipe: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_RECIPE_ERROR,
      });
    }
  };
}
export function loadShoppingLists() {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${url}/lists`);
      dispatch({
        type: actionTypes.LOAD_LISTS,
        shoppingLists: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_LISTS_ERROR,
      });
    }
  };
}
export function updateListById(id, updatedList) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${url}/lists/${id}`, updatedList);
      dispatch({
        type: actionTypes.UPDATE_LIST,
        shoppingLists: data,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_LIST_ERROR',
      });
    }
  };
}
