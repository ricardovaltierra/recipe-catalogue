import React from 'react';
import DishList from '../containers/DishList';

const App = () => (
  <div className='panel'>
    <div className='panel-bg'>
      <i className='settings' />
      <span className='title-header'>the dish</span>
      <i className='search' />
    </div>
    <DishList />
  </div>
);

export default App;