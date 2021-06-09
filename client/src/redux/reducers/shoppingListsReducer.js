/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

function shoppingListsReducer(shoppingLists = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_LISTS:
      return action.shoppingLists;
    default:
      return shoppingLists;
  }
}
export default shoppingListsReducer;
