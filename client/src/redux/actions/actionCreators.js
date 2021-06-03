import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/recipes/'; // TODO: use ENV VARIABLE

function loadRecipes() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_TASKS,
        tasks: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_RECIPES_ERROR,
      });
    }
  };
}

export default loadRecipes;
