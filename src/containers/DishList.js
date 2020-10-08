import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchAllDishes } from '../actions/index';
import Dish from '../components/Dish';
import Navbar from '../components/Navbar';

const DishList = ({
  handleFetchAllDishes, loading, dishes, hasErrors, handleDetailDish, handleSearchDish,
}) => {
  useEffect(() => {
    handleFetchAllDishes();
  }, [handleFetchAllDishes]);

  const renderDishes = () => {
    if (loading) return <div data-testid="loading">Loading...</div>;
    if (hasErrors) return <div data-testid="error">Unable to load recipes, please try again.</div>;
    return dishes.map(
      dish => <Dish key={dish.recipe.uri} dish={dish} handleDetailDish={handleDetailDish} />,
    );
  };
  return (
    <div className="main-wrapper">
      <Navbar handleSearchDish={handleSearchDish} />
      <section className="item-list">
        {renderDishes()}
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  dishes: state.dishes.dishes,
  loading: state.dishes.loading,
  hasErrors: state.dishes.hasErrors,
});

const mapDispatchToProps = dispatch => ({
  handleFetchAllDishes: () => dispatch(fetchAllDishes()),
  handleSearchDish: dishToSearch => dispatch(fetchAllDishes(dishToSearch)),
});

DishList.propTypes = {
  handleFetchAllDishes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  dishes: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasErrors: PropTypes.bool.isRequired,
  /* eslint-disable react/require-default-props */
  handleDetailDish: PropTypes.bool,
  /* eslint-disable react/require-default-props */
  handleSearchDish: PropTypes.func,

};

export default connect(mapStateToProps, mapDispatchToProps)(DishList);
