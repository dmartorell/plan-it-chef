/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

function shoppingListsReducer(shoppingLists = {}, action) {
  if (action.type === actionTypes.LOAD_LISTS) {
    return action.shoppingLists;
  }
  return shoppingLists;
}
export default shoppingListsReducer;
