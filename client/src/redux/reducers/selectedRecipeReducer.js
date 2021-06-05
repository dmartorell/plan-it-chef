/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

function selectedRecipeReducer(selectedRecipe = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_RECIPE:
      return action.recipe;
    default:
      return selectedRecipe;
  }
}
export default selectedRecipeReducer;
