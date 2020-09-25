/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const Dish = (dish, handleDetailDish) => (
  <li className='list-item'>
    <div className='dish-actions'>
      <div className=''>
        <h3>{dish.category}</h3>
        <h1>{dish.name}</h1>
        <button onClick={() => handleDetailDish(dish.id)}>Recipe</button>
      </div>
    </div>
  </li>
);

Dish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  handleDetailDish: PropTypes.func.isRequired
};

export default Dish;