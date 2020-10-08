/* eslint-disable react/no-deprecated */
/* eslint-disable camelcase */
// ^ This one in particular is a PR for ESlint on https://github.com/eslint/eslint/issues/10503
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const getRandomID = () => Math.floor(Math.random() * Math.floor(5000));

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dish: null,
      preview: null,
      ingredients: null,
      facts: null,
      currentTab: null,
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    try {
      const { location } = this.props;
      const { dish } = location;

      const Preview = () => (
        <div className="detail-prev">
          <div className="detail-main">
            <h2 className="detail-title">{dish.label}</h2>
            <p className="detail-calories">
              {Number(dish.calories.toFixed(0))}
              {' '}
              cal
            </p>
          </div>
          <p className="detail-source">
            Posted by
            <strong>{dish.source}</strong>
          </p>
        </div>
      );
      const Ingredients = () => (
        <div className="detail-ingredients">
          <h2 className="detail-title">{dish.label}</h2>
          <div className="detail-ul-hl">
            {
            dish.healthLabels.map(label => <p className="detail-li-hl" key={label.substring(0, 2).concat(getRandomID())}>{ label }</p>)
          }
          </div>
          <ul className="detail-ul-ig">
            {
            dish.ingredients.map(ingredient => (
              <li className="detail-li-ig" key={ingredient.text.substring(0, 2).concat(getRandomID())}>
                <input type="checkbox" className="check-ig" />
                <label htmlFor="checkbox"><span>{ ingredient.text }</span></label>
              </li>
            ))
          }
          </ul>
        </div>
      );
      const Facts = () => (
        <div className="detail-facts">
          <h2 className="detail-title">{dish.label}</h2>
          <div className="detail-ul-fa">
            {
          Object.keys(dish.totalDaily).map(key => {
            const fact = dish.totalDaily[key];
            return (
              <p className="detail-li-fa" key={fact.label.substring(0, 2).concat(getRandomID())}>
                <strong>{ fact.label }</strong>
                <span>{`   ${Number(fact.quantity.toFixed(2))}%` }</span>
              </p>
            );
          })
        }
          </div>
        </div>
      );

      this.setState({
        dish,
        preview: <Preview />,
        ingredients: <Ingredients />,
        facts: <Facts />,
        currentTab: <Preview />,
      });
    } catch (err) {
      alert(err.message);
    }
  }

  handleTabChange(e) {
    let currentTab = null;
    switch (e.target.innerHTML) {
      case 'Preview': {
        const { preview } = this.state;
        currentTab = preview;
        break; }
      case 'Ingredients': {
        const { ingredients } = this.state;
        currentTab = ingredients;
        break; }
      case 'Facts': {
        const { facts } = this.state;
        currentTab = facts;
        break; }
      default: {
        const { preview } = this.state;
        currentTab = preview;
        break; }
    }
    this.setState({
      currentTab,
    });
  }

  render() {
    try {
      const { dish, currentTab } = this.state;
      const { image } = dish;
      return (
        <div className="detail-wrapper">
          <div className="nav-top">
            <Link to={{ pathname: '/' }} className="return-link">
              <i className="arrowicon nav-icon">V</i>
            </Link>
            <p className="nav-title">maindish</p>
            <i className="nav-icon" />
          </div>
          <span style={{ backgroundImage: `url(${image})` }} className="detail-img">
            <div className="detail-tab">
              <p><button type="button" className="tab-item" onClick={this.handleTabChange} onKeyDown={this.handleTabChange}>Preview</button></p>
              <p><button type="button" className="tab-item" onClick={this.handleTabChange} onKeyDown={this.handleTabChange}>Ingredients</button></p>
              <p><button type="button" className="tab-item" onClick={this.handleTabChange} onKeyDown={this.handleTabChange}>Facts</button></p>
            </div>
            <div className="details" id="details">
              {currentTab}
            </div>
          </span>
        </div>
      );
    } catch (error) {
      return (
        <div className="detail-wrapper">
          <div className="nav-top">
            <Link to={{ pathname: '/' }}>
              <i className="arrowicon nav-icon">V</i>
            </Link>
            <p className="nav-title">maindish</p>
            <i className="nav-icon" />
          </div>
          <h1 className="detail-error">Page not found :(</h1>
        </div>
      );
    }
  }
}

Detail.propTypes = {
  location: PropTypes.shape({
    dish: PropTypes.shape({
      label: PropTypes.string,
      healthLabels: PropTypes.arrayOf(PropTypes.string),
      ingredients: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.shape({}),
        ]),
      ),
      totalDaily: PropTypes.shape({}),
      calories: PropTypes.number,
      source: PropTypes.string,
    }),
  }).isRequired,
};

export default Detail;
