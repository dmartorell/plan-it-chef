/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionTypes';

const recipesUrl = process.env.REACT_APP_RECIPES_URL;
const listsUrl = process.env.REACT_APP_LISTS_URL;
const signupUrl = process.env.REACT_APP_SIGNUP_URL;
const loginUrl = process.env.REACT_APP_LOGIN_URL;

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
export function loadListById(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${listsUrl}/${id}`);
      dispatch({
        type: actionTypes.LOAD_LIST,
        list: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_LIST_ERROR,
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
        type: actionTypes.UPDATE_LIST_ERROR,
      });
    }
  };
}
export function signup(user) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${signupUrl}`, user);
      dispatch({
        type: actionTypes.CREATE_USER,
        user: data,
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: actionTypes.CREATE_USER_ERROR,
      });
    }
  };
}
export function login(user) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${loginUrl}`, user);
      dispatch({
        type: actionTypes.LOGIN_USER,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOGIN_USER_ERROR,
      });
    }
  };
}
// export function signup(userInfo) {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(`${listsUrl}/${id}`, updatedList);
//       dispatch({
//         type: actionTypes.UPDATE_LIST,
//         shoppingLists: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: 'UPDATE_LIST_ERROR',
//       });
//     }
//   };
// }
