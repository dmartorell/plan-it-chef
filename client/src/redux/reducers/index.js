import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import selectedRecipeReducer from './selectedRecipeReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  selectedRecipe: selectedRecipeReducer,
});

export default rootReducer;
