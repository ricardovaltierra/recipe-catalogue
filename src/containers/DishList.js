import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllDishes } from '../actions/index';
import { Dish } from '../components/Dish';

const DishList = ({ dispatch, loading, dishes, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchAllDishes());
  }, [dispatch]);

console.log(`log from DishList: ${dishes}`);

const renderDishes = () => {
  if(loading) return <>Loading...</>;
  if(hasErrors) return <>Unable to load recipes, please try again.</>;
  // return dishes.map(dish => <Dish key={dish.recipe.uri} dish={dish} />);
};

return (
  <section>
    <h1>Recipes</h1>
    {/* {renderDishes()} */}
  </section>
);
};

const mapStateToProps = state => ({ 
  dishes: state.dishes.dishes,
  loading: state.dishes.loading,
  hasErrors: state.dishes.hasErrors
 });

export default connect(mapStateToProps)(DishList);
