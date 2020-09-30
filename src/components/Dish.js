import React from 'react';
import PropTypes from 'prop-types';

export const Dish = ({ dish, handleDetailDish }) => (
  <div onClick={() => handleDetailDish(dish)}>
    <h2>ID: {dish.dish.uri}</h2>
    <h3>Dish category: {dish.dish.healthLabels[0]}</h3>
    <h1>Dish name:{dish.dish.label}</h1>
    <img src={dish.dish.image} size='50px' alt={dish.dish.label}/>
  </div>
);

Dish.propTypes = {
  dish: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDetailDish: PropTypes.func.isRequired
};

export default Dish;