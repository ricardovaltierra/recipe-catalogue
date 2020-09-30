import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DishList from '../containers/DishList';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={DishList} />
      </Switch>
    </Router>
  </div>
);

export default App;