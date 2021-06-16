/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function recipesReducer(recipes = [], action) {
  // eslint-disable-next-line no-debugger
  switch (action.type) {
    case actionTypes.LOAD_RECIPES:
      return action.recipes;
    case actionTypes.GET_API_RECIPE:
      return [...recipes, action.recipe];
    case actionTypes.DELETE_RECIPE:
      return recipes.filter((recipe) => recipe._id !== action.recipeId);
    default:
      return recipes;
  }
}
export default recipesReducer;
