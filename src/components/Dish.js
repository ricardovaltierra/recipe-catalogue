import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Dish = ({ dish }) => (
    <Link 
    key={dish.recipe.uri}
    to={{
      pathname: `/${dish.recipe.label}`,
      dish: dish.recipe
      }
    } className='menu-item'>
        <span style={{ backgroundImage: 'url(' + dish.recipe.image + ')' }} className='item-img'>
          <div className='item-description'>
            <h1 className='item-title'>{dish.recipe.label}</h1>
            <div className='item-cal-ing'>
              <h3 className='item-calories'>{Number(dish.recipe.calories.toFixed(0))} calories</h3>
              <h3 className='item-ingredients'>{ dish.recipe.ingredients.length } ingredients</h3>
            </div>
          </div>
        </span>
    </Link>
);

Dish.propTypes = {
  dish: PropTypes.any.isRequired
};