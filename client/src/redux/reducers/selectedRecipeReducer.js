import actionTypes from '../actions/actionTypes';

function selectedRecipeReducer(selectedRecipe = {}, action) {
  if (action.type === actionTypes.LOAD_RECIPE) {
    return action.recipe;
  }
  return selectedRecipe;
}
export default selectedRecipeReducer;
