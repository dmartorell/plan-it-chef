/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/recipes'; // TODO: use ENV VARIABLE

export function loadRecipes(title) {
  return async (dispatch) => {
    try {
      const { data } = title ? await axios(`${url}/?title=${title}`) : await axios(url);
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
      const { data } = await axios(`${url}/detail/${id}`);
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
