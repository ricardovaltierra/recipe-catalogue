import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { GET_DISHES, GET_DISHES_SUCCESS, GET_DISHES_FAILURE, SEARCH_DISH } from '../helpers/actions';
import { getDishes, getDishesSuccess, getDishesFailure, fetchAllDishes, searchDish } from '../actions/index';
import { APP_ID, APP_KEY } from '../helpers/credentials';
import dishes from './sampleSearch.json';
import fetchMock from 'fetch-mock';

// SYNCHRONOUS ACTIONS.
describe('actions', () => {
  it('should create an acction to search a dish', () => {
    const dishToSearch = 'Pizza';
    const expectedAction = {
      type: SEARCH_DISH,
      dishToSearch: dishToSearch
    };

    expect(searchDish(dishToSearch)).toEqual(expectedAction);
  });

  it('should create an acction when there is a GET request for dishes', () => {

    const expectedAction = {
      type: GET_DISHES
    };

    expect(getDishes()).toEqual(expectedAction);
  });

  it('should create an acction to get on success a dishlist', () => {
    const dishes = 
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7394be65718d9911170ceeb404c85d74",
          "label": "Tartufi",
          "image": "https://www.edamam.com/web-img/785/7859cf2d8ece9a2d4dc4c4c7d2cfb212.jpg",
          "source": "Serious Eats",
          "url": "http://www.seriouseats.com/recipes/2011/07/tartufi-chocolate-covered-ice-cream-recipe.html",
          "shareAs": "http://www.edamam.com/recipe/tartufi-7394be65718d9911170ceeb404c85d74/random",
          "yield": 8,
          "dietLabels": [],
          "healthLabels": [
            "Vegetarian",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "2 cups (500 ml) ice cream",
            "6 ounces (170 g) bittersweet or semisweet chocolate, chopped",
            "6 tablespoons (85 g) unsalted butter, cut into pieces",
            "1 1/2 tablespoons light corn syrup"
          ],
          "ingredients": [
            {
              "text": "2 cups (500 ml) ice cream",
              "weight": 278.9656872902047,
              "image": "https://www.edamam.com/food-img/1be/1be43587dc55730fc761aedf4f3df090.jpg"
            },
            {
              "text": "6 ounces (170 g) bittersweet or semisweet chocolate, chopped",
              "weight": 170.09713875,
              "image": "https://www.edamam.com/food-img/0a1/0a1b6f30cb99e1842cac6167f6f424d7.jpg"
            },
            {
              "text": "6 tablespoons (85 g) unsalted butter, cut into pieces",
              "weight": 85,
              "image": null
            },
            {
              "text": "1 1/2 tablespoons light corn syrup",
              "weight": 33,
              "image": "https://www.edamam.com/food-img/148/1488bb6a128ff5142e0a52d5eeb36d36.jpg"
            }
          ],
          "calories": 2096.7652386907234,
          "totalWeight": 567.0628260402048,
          "totalTime": 454,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2096.7652386907234,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 150.72486722692253,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 92.79681229512991,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 2.7862999999999998,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 43.10222210347118,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 5.490613266876725,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 199.9196738617383,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 11.988490997281433,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 177.28455946173145,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 177.23355946173146,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 17.630378882657165,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 305.49490240769006,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 271.69323509466375,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 436.197164131462,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 236.69690578312867,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1196.7262741450074,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 5.592109561436184,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 4.902136890052413,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 537.842194804715,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 910.5795110024414,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 1.6737941237412282,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.23164935810148396,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.8515050743714914,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 1.0856149797191377,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.1959875284617983,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 38.610912402010236,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 38.610912402010236,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.2324661804317985,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.8329313745804092,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 3.2511496226206136,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 16.312336831870613,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 194.13604921827488,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 104.83826193453618,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 231.88441111834234,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 463.9840614756496,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 66.6398912872461,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 47.95396398912573,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 35.26075776531433,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 101.83163413589669,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 11.320551462277656,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 43.6197164131462,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 56.356406138840164,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 25.462261152021437,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 31.067275341312136,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 44.5648808186583,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 76.83459925781642,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 101.1755012224935,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 1.8597712486013644,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 19.304113175123664,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 65.50039033626857,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 6.78509362324461,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 15.075963727830636,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 9.652728100502559,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 51.352757517991606,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 12.219542497202728,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 21.674330817470757,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 13.593614026558845,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 150.72486722692253,
              "hasRDI": true,
              "daily": 231.88441111834234,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 92.79681229512991,
                  "hasRDI": true,
                  "daily": 463.9840614756496,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 2.7862999999999998,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 43.10222210347118,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 5.490613266876725,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 199.9196738617383,
              "hasRDI": true,
              "daily": 66.6398912872461,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 187.93118286445684,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 11.988490997281433,
                  "hasRDI": true,
                  "daily": 47.95396398912573,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 177.28455946173145,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 177.23355946173146,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 17.630378882657165,
              "hasRDI": true,
              "daily": 35.26075776531433,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 305.49490240769006,
              "hasRDI": true,
              "daily": 101.83163413589669,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 271.69323509466375,
              "hasRDI": true,
              "daily": 11.320551462277656,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 436.197164131462,
              "hasRDI": true,
              "daily": 43.6197164131462,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 236.69690578312867,
              "hasRDI": true,
              "daily": 56.356406138840164,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1196.7262741450074,
              "hasRDI": true,
              "daily": 25.462261152021437,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 5.592109561436184,
              "hasRDI": true,
              "daily": 31.067275341312136,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 4.902136890052413,
              "hasRDI": true,
              "daily": 44.5648808186583,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 537.842194804715,
              "hasRDI": true,
              "daily": 76.83459925781642,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 910.5795110024414,
              "hasRDI": true,
              "daily": 101.1755012224935,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 1.6737941237412282,
              "hasRDI": true,
              "daily": 1.8597712486013644,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.23164935810148396,
              "hasRDI": true,
              "daily": 19.304113175123664,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.8515050743714914,
              "hasRDI": true,
              "daily": 65.50039033626857,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 1.0856149797191377,
              "hasRDI": true,
              "daily": 6.78509362324461,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.1959875284617983,
              "hasRDI": true,
              "daily": 15.075963727830636,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 38.610912402010236,
              "hasRDI": true,
              "daily": 9.652728100502559,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 38.610912402010236,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.2324661804317985,
              "hasRDI": true,
              "daily": 51.352757517991606,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.8329313745804092,
              "hasRDI": true,
              "daily": 12.219542497202728,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 3.2511496226206136,
              "hasRDI": true,
              "daily": 21.674330817470757,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 16.312336831870613,
              "hasRDI": true,
              "daily": 13.593614026558845,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 194.13604921827488,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      };
    const expectedAction = {
      type: GET_DISHES_SUCCESS,
      payload: dishes
    };

    expect(getDishesSuccess(dishes)).toEqual(expectedAction);
  });

  it('should create an acction when there is an error on request', () => {

    const expectedAction = {
      type: GET_DISHES_FAILURE
    };

    expect(getDishesFailure()).toEqual(expectedAction);
  });
});

// ASYNCHRONOUS ACTIONS.
const middlewares = [thunk];
const mockstore = configureMockStore(middlewares);

describe('async actions', () => {

  afterEach(() => {fetchMock.restore()
  });

  it('test apiedamam connectivity', async () => {
    fetchMock.mock('https://api.edamam.com', 200);
    const res = await fetch('https://api.edamam.com');
    expect(res.ok);
  });

  it('creates GET_DISHES_SUCCESS when fetching all dishes has been done', () => {

    const dishToSearch = 'random';

    fetchMock.getOnce(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${dishToSearch}`, {
      body: dishes,
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    });

    const expectedActions = [
      { type: GET_DISHES },
      { type: GET_DISHES_SUCCESS, payload: dishes.hits }
    ];
    
    const store = mockstore({
        loading: false,
        hasErrors: false,
        dishes: []
      });

    return store.dispatch(fetchAllDishes()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  });
});