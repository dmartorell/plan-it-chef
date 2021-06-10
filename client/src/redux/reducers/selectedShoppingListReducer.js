import actionTypes from '../actions/actionTypes';

function selectedShoppingListReducer(selectedList = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_LIST:
      return action.list;
    default:
      return selectedList;
  }
}
export default selectedShoppingListReducer;
