import React from 'react';
import { Link } from "react-router-dom";

const getRandomID = () => {
  return Math.floor(Math.random() * Math.floor(5000));
};

const Detail = props => {
  const dish = props.location.dish;
  return (
      <div id={dish.uri}>
        <Link to={{pathname: '/'}}>
          <p>Recipe menu</p>
        </Link>
        <h1>{dish.label}</h1>
        <h3>Category: {dish.healthLabels[0] || 'No category'}</h3>
        <img src={dish.image} size='50px' alt={dish.label}/>
        <h2>{Number(dish.calories.toFixed(0))} calories</h2>
        <div>
          <h2>Health Labels</h2>
          <ul>
            {
              dish.healthLabels.map(label => {
              return  <li key={ label.substring(0,2).concat(getRandomID()) }>{ label }</li> 
              })
            }
          </ul>
        </div>
        <div>
          <h2>Ingredients</h2>
          <ul>
            {
              dish.ingredients.map(ingredient => {
              return  <li key={ ingredient.text.substring(0,2).concat(getRandomID()) }>{ ingredient.text }</li> 
              })
            }
          </ul>
        </div>
      </div>
    );
};

export default Detail;