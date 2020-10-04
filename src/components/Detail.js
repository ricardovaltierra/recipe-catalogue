import React from 'react';
import { Link } from "react-router-dom";

const getRandomID = () => {
  return Math.floor(Math.random() * Math.floor(5000));
};

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabOption: 0,
      dish: null,
      preview: null,
      ingredients: null,
      facts: null,
      currentTab: null
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(e) {
    let currentTab = null;
    switch (e.target.innerHTML) {
      case 'Preview':
        currentTab = this.state.preview;
        break;
      case 'Ingredients':
        currentTab = this.state.ingredients;
        break;
      case 'Facts':
        console.log(this.state.dish.totalDaily);
        currentTab = this.state.facts;
        break;
      default:
        currentTab = this.state.preview;
        break;
    }
    this.setState({
      currentTab: currentTab
    });
  }

  componentWillMount(){
    try {
    const dish = this.props.location.dish;

    const Preview = () => (
      <div className='detail-prev'>
        <div className='detail-main'>
          <h2 className='detail-title'>{dish.label}</h2>
          <p className='detail-calories'>{Number(dish.calories.toFixed(0))} cal</p>
        </div>
        <p className='detail-source'>Posted by <strong>{dish.source}</strong></p>
      </div>
    );
    const Ingredients = () => (
      <div className='detail-ingredients'>
        <h2 className='detail-title'>{dish.label}</h2>
        <div className='detail-ul-hl'>
          {
            dish.healthLabels.map(label => {
            return  <p className='detail-li-hl' key={ label.substring(0,2).concat(getRandomID()) }>{ label }</p> 
            })
          }
        </div>
        <ul className='detail-ul-ig'>
          {
            dish.ingredients.map(ingredient => {
            return  <li className='detail-li-ig' key={ ingredient.text.substring(0,2).concat(getRandomID()) }><input type='checkbox' className='check-ig'/><label htmlFor='checkbox'><span>{ ingredient.text }</span></label></li> 
            })
          } 
        </ul>
      </div>
    );
    const Facts = () => (
      <div className='detail-facts'>
        <h2 className='detail-title'>{dish.label}</h2>
        <div className='detail-ul-fa'>
        {
          Object.keys(dish.totalDaily).map((key, index) => {
            const fact = dish.totalDaily[key];
          return  <p className='detail-li-fa' key={ fact.label.substring(0,2).concat(getRandomID()) }><strong>{ fact.label }</strong><span>{'   ' +  Number(fact.quantity.toFixed(2)) + '%' }</span></p>
          })
        } 
        </div>
      </div>
    );

    this.setState({
      dish: dish,
      preview: <Preview />,
      ingredients: <Ingredients />,
      facts: <Facts />,
      currentTab: <Preview />
    });
  } catch (err) {
    console.log(err.message);
  }
  }

  render() {
    try {
      return (
        <div className='detail-wrapper'>
          <div className='nav-top'>
            <Link to={{pathname: '/'}} className='return-link'>
            <i className='nav-icon'>V</i>
            </Link>
            <p className="nav-title">maindish</p>
            <i className='dropicon nav-icon'>Q</i>
          </div>
          <span style={{ backgroundImage: 'url(' + this.state.dish.image + ')' }} className='detail-img'>
            <div className='detail-tab'>
              <p className='tab-item' onClick={this.handleTabChange}>Preview</p>
              <p className='tab-item' onClick={this.handleTabChange}>Ingredients</p>
              <p className='tab-item' onClick={this.handleTabChange}>Facts</p>
            </div>
            <div className='details' id='details'>
              {this.state.currentTab}
            </div>
          </span>
        </div>
      );
    } catch (error) {
      return (
        <div className='detail-wrapper'>
          <div className='nav-top'>
            <Link to={{pathname: '/'}}>
              <i className='nav-icon'>V</i>
            </Link>
            <p className="nav-title">maindish</p>
            <i className='dropicon nav-icon'>Q</i>
          </div>
          <h1 className='detail-error'>Page not found :(</h1>
        </div>
      );
    }
  }
};

export default Detail;