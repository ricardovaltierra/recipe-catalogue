import React from 'react';
import PropTypes from 'prop-types';

export const Dish = ({ dish, handleDetailDish }) => (
  <div onClick={() => handleDetailDish(dish)}>
    <h2>ID: {dish.recipe.uri}</h2>
    <h3>Dish category: {dish.recipe.healthLabels[0]}</h3>
    <h1>Dish name:{dish.recipe.label}</h1>
    <img src={dish.recipe.image} size='50px' alt={dish.recipe.label}/>
  </div>
);

Dish.propTypes = {
  dish: PropTypes.any.isRequired
};