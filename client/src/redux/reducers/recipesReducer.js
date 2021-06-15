import actionTypes from '../actions/actionTypes';

function recipesReducer(recipes = [], action) {
  // eslint-disable-next-line no-debugger
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_RECIPES:
      return action.recipes;
    case actionTypes.GET_API_RECIPE:
      return [...recipes, action.recipe];
    default:
      return recipes;
  }
}
export default recipesReducer;
