import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Recipes from './components/Recipes';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/recipes" component={Recipes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
