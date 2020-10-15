import React from 'react';
import { PropTypes } from 'prop-types';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      hidden: false,
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
    const { handleSearchDish } = this.props;
    const { input } = this.state;
    handleSearchDish(input || 'random');
  }

  handleDropSearch() {
    const { hidden } = this.state;
    this.setState({
      hidden: !hidden,
    });
  }

  render() {
    const { hidden } = this.state;
    const { input } = this.state;

    return (
      <div className="navbar">
        <div className="nav-top">
          <i className="gearicon nav-icon" />
          <p className="nav-title">maindish</p>
          <i role="button" tabIndex={0} className="dropicon nav-icon" onClick={this.handleDropSearch} onKeyDown={this.handleDropSearch}>Q</i>
        </div>
        <div className={`search-bar ${hidden ? 'hide' : ''}`} id="search-nav">
          <input className="search-input" onChange={this.handleChange} type="text" value={input} placeholder="Type a dish..." />
          <button className="search-button" type="button" onClick={this.handleSubmit}>Search</button>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  /* eslint-disable react/require-default-props */
  handleSearchDish: PropTypes.func,
};

export default Navbar;
