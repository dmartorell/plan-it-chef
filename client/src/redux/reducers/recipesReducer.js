/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function recipesReducer(recipes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return action.tasks;

    default:
      return recipes;
  }
}
export default recipesReducer;
