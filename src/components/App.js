import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DishList from '../containers/DishList';
import Detail from '../components/Detail';

const App = () =>(
      <div className='app-wrapper'>
        <div className='nav-top'>
          <i className='nav-icon'>O</i>
          <p className="nav-title">sweet</p>
          <i className='dropicon nav-icon'>Q</i>
        </div>
        <Router>
          <Switch>
            <Route exact path="/" component={DishList} />
            <Route exact path="/:dish_name" component={Detail} />
          </Switch>
        </Router>
      </div>
    );

export default App;