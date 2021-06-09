import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import configureStore from './redux/store';
import Landing from './components/Landing';
import Recipes from './components/Recipes';
import RecipeDetail from './components/RecipeDetail';
import ShoppingLists from './components/ShoppingLists';

import './App.scss';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/recipes/:recipeId" component={RecipeDetail} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/lists" component={ShoppingLists} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
