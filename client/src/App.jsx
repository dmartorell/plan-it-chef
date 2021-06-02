import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Recipes from './components/Recipes';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/recipes" component={Recipes} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
