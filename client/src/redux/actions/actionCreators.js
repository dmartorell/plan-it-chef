/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/recipes/'; // TODO: use ENV VARIABLE

function loadRecipes(title) {
  return async (dispatch) => {
    try {
      const { data } = title ? await axios(`${url}?title=${title}`) : await axios(url);
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

export default loadRecipes;
