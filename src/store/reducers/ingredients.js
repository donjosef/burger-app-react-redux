import * as actionTypes from '../actions/actionTypes'

const ingrState = {
  // ingredients: {
  //   meat: 0,
  //   salad: 0,
  //   cheese: 0,
  //   bacon: 0
  // }
  ingredients: {}
};
const ingrReducer = (state = ingrState, action) => {
      switch(action.type) {
        case actionTypes.INCREASE:
            return {
              ingredients: {
                ...state.ingredients,
                [action.ingrType]: state.ingredients[action.ingrType] + 1
              }
            };
        case actionTypes.DECREASE:
              return {
                ingredients: {
                  ...state.ingredients,
                  [action.ingrType]: state.ingredients[action.ingrType] - 1
                }
              };
        case actionTypes.SET_INGREDIENTS:
              return {
                  ingredients: action.ingredients
              }
      }
    return state;
  }

export default ingrReducer;
