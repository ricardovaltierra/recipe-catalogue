/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const Dish = (dish, handleDetailDish) => (
  <li className='list-item'>
    <div className='dish-actions'>
      <div className=''>
        <h2>ID: {dish.id}</h2>
        <h3>Dish category: {dish.category}</h3>
        <h1>Dish name:{dish.name}</h1>
        <button onClick={() => handleDetailDish(dish.id)}>Recipe</button>
      </div>
    </div>
  </li>
);

Dish.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleDetailDish: PropTypes.func.isRequired
};

export default Dish;