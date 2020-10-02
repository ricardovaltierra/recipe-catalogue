import React from 'react';
import { Link } from "react-router-dom";

const getRandomID = () => {
  return Math.floor(Math.random() * Math.floor(5000));
};

const Detail = props => {
  try {
    const dish = props.location.dish;
    const Preview = () => (
      <div className='detail-prev'>
        <div className='detail-main'>
          <h2 className='detail-title'>{dish.label}</h2>
          <p className='detail-calories'>{Number(dish.calories.toFixed(0))} cal</p>
        </div>
        <p className='detail-source'>Posted by <strong>{dish.source}</strong></p>
      </div>
    );
    const Ingredients = (
      <div className='detail-ingredients'>
        <h2>{dish.label}</h2>
        <ul>
          {
            dish.healthLabels.map(label => {
            return  <li key={ label.substring(0,2).concat(getRandomID()) }>{ label }</li> 
            })
          }
        </ul>
        <ul>
          {
            dish.ingredients.map(ingredient => {
            return  <li key={ ingredient.text.substring(0,2).concat(getRandomID()) }>{ ingredient.text }</li> 
            })
          }
        </ul>
      </div>
    );
    const Facts = (
      <div className='detail-facts'>
        
      </div>
    );
    console.log(dish);
    return (
      <div id={dish.uri} className='detail-wrapper'>
        <div className='nav-top'>
          <Link to={{pathname: '/'}} className='return-link'>
          <i className='nav-icon'>V</i>
          </Link>
          <p className="nav-title">maindish</p>
          <i className='dropicon nav-icon'>Q</i>
        </div>
        <span style={{ backgroundImage: 'url(' + dish.image + ')' }} className='detail-img'>
          <div className='detail-tab'>
            <p className='tab-item'>Preview</p>
            <p className='tab-item'>Ingredients</p>
            <p className='tab-item'>Facts</p>
          </div>
          <div className='details'>
            <Preview />
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
  
};

export default Detail;