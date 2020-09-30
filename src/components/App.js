import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DishList from '../containers/DishList';
import Detail from '../components/Detail';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={DishList} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </Router>
  </div>
);

export default App;