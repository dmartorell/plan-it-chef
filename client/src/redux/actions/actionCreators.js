import axios from 'axios';
import actionTypes from './actionTypes';

const recipesUrl = process.env.REACT_APP_RECIPES_URL;
const listsUrl = process.env.REACT_APP_LISTS_URL;

export function loadRecipes(title) {
  return async (dispatch) => {
    try {
      const { data } = title ? await axios(`${recipesUrl}/?title=${title}`) : await axios(`${recipesUrl}`);
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
      const { data } = await axios(`${recipesUrl}/${id}`);
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
      const { data } = await axios(`${listsUrl}`);
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
      const { data } = await axios.put(`${listsUrl}/${id}`, updatedList);
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
