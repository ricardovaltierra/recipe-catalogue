import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Dish = ({ dish }) => (
  <div id={dish.recipe.uri}>
    <Link 
    key={0}
    to={{
      pathname: `/${dish.recipe.label}`,
      dish: dish.recipe
      }
    }>
      <h1>{dish.recipe.label}</h1>
      <h2>Category: {dish.recipe.healthLabels[0] || 'No category'}</h2>
      <img src={dish.recipe.image} size='50px' alt={dish.recipe.label}/>
      <h2>{Number(dish.recipe.calories.toFixed(0))} calories</h2>
      <h2>{ dish.recipe.ingredients.length } ingredients</h2>
    </Link>
  </div>
);

Dish.propTypes = {
  dish: PropTypes.any.isRequired
};