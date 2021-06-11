import actionTypes from '../actions/actionTypes';

function recipesReducer(recipes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_RECIPES:
      return action.recipes;
    default:
      return recipes;
  }
}
export default recipesReducer;
