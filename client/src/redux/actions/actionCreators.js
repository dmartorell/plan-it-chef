import axios from 'axios';
import actionTypes from './actionTypes';
import { sortByAisle } from '../../helpers/commonHelper';

const recipesUrl = process.env.REACT_APP_RECIPES_URL;
const listsUrl = process.env.REACT_APP_LISTS_URL;
const signupUrl = process.env.REACT_APP_SIGNUP_URL;
const loginUrl = process.env.REACT_APP_LOGIN_URL;
const recipesParserUrl = process.env.REACT_APP_RECIPES_PARSER_URL;
const apiKey = process.env.REACT_APP_SPOONACULAR_APIKEY;

export function loadRecipes(token, title = '') {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  return async (dispatch) => {
    try {
      const { data } = title ? await axios(`${recipesUrl}/?title=${title}`, headers) : await axios(`${recipesUrl}`, headers);
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
export function loadRecipeById(id, token) {
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  return async (dispatch) => {
    try {
      const { data } = await axios(`${recipesUrl}/${id}`, headers);
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

export function loadShoppingLists(token) {
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  return async (dispatch) => {
    try {
      const { data } = await axios(`${listsUrl}`, headers);
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
export function loadListById(id, token) {
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  return async (dispatch) => {
    try {
      const { data } = await axios(`${listsUrl}/${id}`, headers);
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
export function updateIngredientsList(listId, currentList, ingredientId, checkState, token) {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const updatedList = currentList.ingredients.map((ingredient) => (ingredient._id === ingredientId
    ? { ...ingredient, isActive: checkState }
    : ingredient));
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${listsUrl}/${listId}`, { ingredients: updatedList }, headers);
      dispatch({
        type: actionTypes.UPDATE_LIST,
        list: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_LIST_ERROR,
      });
    }
  };
}

export function updateListById(userList, currentRecipe, token) {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const newRecipeIngredients = currentRecipe.extendedIngredients
    .map((ingredient) => (
      {
        ...ingredient,
        isActive: true,
        recipe: currentRecipe._id,
      }
    ));
  const updatedList = [...userList?.ingredients, ...newRecipeIngredients].sort(sortByAisle);

  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${listsUrl}/${userList._id}`, { ingredients: updatedList }, headers);
      dispatch({
        type: actionTypes.UPDATE_LIST,
        list: data,
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
        user: { isLogged: false },
      });
    }
  };
}
export function getFormattedRecipe(url, token) {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  return async (dispatch) => {
    try {
      const { data } = await axios(`${recipesParserUrl}=${url}&apiKey=${apiKey}`);
      await axios.post(`${recipesUrl}`, data, headers);
      dispatch({
        type: actionTypes.GET_API_RECIPE,
        recipe: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_API_RECIPE_ERROR,
      });
    }
  };
}
export function deleteRecipeById(id, token) {
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${recipesUrl}/${id}`, headers);
      dispatch({
        type: actionTypes.DELETE_RECIPE,
        recipeId: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_RECIPE_ERROR,
      });
    }
  };
}
