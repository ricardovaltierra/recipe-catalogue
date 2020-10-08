import React from 'react';

export class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropSearch = this.handleDropSearch.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearchDish(this.state.input || 'random');
  }

  handleDropSearch() {
    const dropdownSearch = document.getElementById('search-nav');
    dropdownSearch.classList.toggle('hide');
  }

  render() {
    return (
      <div className="navbar">
        <div className="nav-top">
          <i className="gearicon nav-icon" />
          <p className="nav-title">maindish</p>
          <i className="dropicon nav-icon" onClick={this.handleDropSearch}>Q</i>
        </div>
        <div className="search-bar" id="search-nav">
          <input className="search-input" onChange={this.handleChange} type="text" value={this.state.input} placeholder="Type a dish..." />
          <button className="search-button" type="button" onClick={this.handleSubmit}>Search</button>
        </div>
      </div>
    );
  }
}
