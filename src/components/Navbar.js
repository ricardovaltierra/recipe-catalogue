import React from 'react';

export class Navbar extends React.Component {
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

  handleSubmit(e){
    e.preventDefault();
    console.log(`Current input ${this.state.input || 'random'}`);
    this.props.handleSearchDish(this.state.input || 'random');
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="text" value={this.state.input} placeholder='Type a dish...' />
        <button type="button" onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
}