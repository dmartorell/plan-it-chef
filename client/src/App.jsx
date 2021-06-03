import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import configureStore from './redux/store';
import Landing from './components/Landing';
import Recipes from './components/Recipes';

import './App.scss';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/recipes" component={Recipes} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
