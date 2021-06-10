import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import selectedRecipeReducer from './selectedRecipeReducer';
import shoppingListsReducer from './shoppingListsReducer';
import selectedShoppingListReducer from './selectedShoppingListReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  selectedRecipe: selectedRecipeReducer,
  shoppingLists: shoppingListsReducer,
  selectedList: selectedShoppingListReducer,
});

export default rootReducer;
