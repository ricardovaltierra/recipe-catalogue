import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DishList from '../containers/DishList';
import Detail from '../components/Detail';

const App = () =>(
        <Router>
          <Switch>
            <Route exact path="/" component={DishList} />
            <Route exact path="/:dish_name" component={Detail} />
          </Switch>
        </Router>
    );

export default App;