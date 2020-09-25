import React from 'react';
import { connect } from 'react-redux';
import Dish from '../components/Dish';
// import CategoryFilter from '../components/CategoryFilter';
import { searchDish, changeFilter, detailDish } from '../actions/index';

const filterDish = (dish, currentFilter) => {
  if(currentFilter === 'All') return dish;
  if(currentFilter === dish.category) return dish;
  return false;
};

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  handleSearchDish: (name) => dispatch(searchDish(name)),
  handleChangeFilter: (filter) => dispatch(changeFilter(filter)),
  handleDetailDish: (id) => dispatch(detailDish(id)) ,
});

const renderList = ({
  state, handleSearchDish, handleChangeFilter, handleDetailDish
}) => (
  <div>
    <ul>
      {
        state.dishes.map(dish => {
          const fDish = filterDish(dish, state.filter);
          if (fDish) {
            return <Dish 
              key={dish.id}
              id={dish.id}
              dish={dish}
              handleDetailDish={handleDetailDish}
            />
          }
        })
      }
    </ul>
  </div>
);

const DishList = connect(
  mapStateToProps, mapDispatchToProps)(renderList);

export default DishList;
