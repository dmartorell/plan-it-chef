import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import selectedRecipeReducer from './selectedRecipeReducer';
import shoppingListsReducer from './shoppingListsReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  selectedRecipe: selectedRecipeReducer,
  shoppingLists: shoppingListsReducer,
});

export default rootReducer;
