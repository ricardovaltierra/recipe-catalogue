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

  dropdwonSearch() {
    const dropdownSearch = document.getElementById('dropdownSearch');
    dropdownSearch.classList.toggle('show');
    console.log(`Click on dropdwon class-> ${dropdownSearch.classList}`);
  }

  render() {
    return (
    <div className='navbar'>
      <div className='nav-top'>
        <i className='gearicon nav-icon'></i>
        <p className="nav-title">maindish</p>
        <i className='dropicon nav-icon'>Q</i>
      </div>
      <div className='search-bar'>
        <input className='search-input' onChange={this.handleChange} type="text" value={this.state.input} placeholder='Type a dish...' />
        <button className='search-button' type="button" onClick={this.handleSubmit}>Search</button>
      </div>
    </div>
    );
  }
}