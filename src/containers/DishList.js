import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllDishes, detailDish } from '../actions/index';
import { Dish } from '../components/Dish';

const DishList = ({ handleFetchAllDishes, loading, dishes, hasErrors, handleDetailDish}) => {
  useEffect(() => {
    handleFetchAllDishes();
  }, [handleFetchAllDishes]);

const renderDishes = () => {
  if(loading) return <>Loading...</>;
  if(hasErrors) return <>Unable to load recipes, please try again.</>;
  return dishes.map(dish => <Dish key={dish.recipe.uri} dish={dish} handleDetailDish={handleDetailDish} />);
};
return (
  <div>
    <section>
      <h1>Recipes</h1>
      {renderDishes()}
    </section>
  </div>
);
};

const mapStateToProps = state => ({ 
  dishes: state.dishes.dishes,
  loading: state.dishes.loading,
  hasErrors: state.dishes.hasErrors
 });

 const mapDispatchToProps = dispatch => ({
  handleFetchAllDishes: () => dispatch(fetchAllDishes()),
  handleDetailDish: (dish) => dispatch(detailDish(dish))
});

export default connect(mapStateToProps, mapDispatchToProps)(DishList);
