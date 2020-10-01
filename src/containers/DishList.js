import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllDishes } from '../actions/index';
import { Dish } from '../components/Dish';
import { Navbar } from '../components/Navbar';

const DishList = ({ handleFetchAllDishes, loading, dishes, hasErrors, handleDetailDish, handleSearchDish }) => {
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
    <Navbar handleSearchDish={handleSearchDish}/>
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
  handleSearchDish: (dishToSearch) => dispatch(fetchAllDishes(dishToSearch))
});

export default connect(mapStateToProps, mapDispatchToProps)(DishList);
