import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import selectedRecipeReducer from './selectedRecipeReducer';
import shoppingListsReducer from './shoppingListsReducer';
import selectedShoppingListReducer from './selectedShoppingListReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  selectedRecipe: selectedRecipeReducer,
  shoppingLists: shoppingListsReducer,
  selectedList: selectedShoppingListReducer,
  user: userReducer,
});

export default rootReducer;
