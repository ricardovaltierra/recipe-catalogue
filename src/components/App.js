import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DishList from '../containers/DishList';
import Detail from '../components/Detail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="text" value={this.state.input} placeholder='Type a dish...' />
        <button type="button">Search</button>
        <Router>
          <Switch>
            <Route exact path="/" component={DishList} />
            <Route path="/:dish_name" component={Detail} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;