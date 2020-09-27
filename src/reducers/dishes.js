import { CHANGE_FILTER, SEARCH_DISH, GET_DISH } from '../helpers/actions';

const APP_ID = '789113e3';
const APP_KEY = '656ad9f53643ec779ce741bbadc8adca';

let dishList = [];

const getData = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=pizza`
  );
  const Data = await response.json();
  Data.hits.map(hit => {
    dishList.push({ 
      id: hit.recipe.uri,
      category: hit.recipe.healthLabels[0],
      name: hit.recipe.label 
    });
  });
};

getData();

const setList = (dataList) => {

}


const dishes = (state = dishList, action) => {
  console.log(state[0]);
  switch(action.type) {
    case SEARCH_DISH:
      return state;
    default:
      return state;
  }
};

export default dishes;