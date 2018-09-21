import * as actionTypes from '../actions/actionTypes'
 const INGREDIENTS_PRICES = {
    meat: 3,
    cheese: 1.5,
    salad: 1,
    bacon: 2
};
const totalPriceState = {
    totalPrice: 0
};

const totalPriceReducer = (state = totalPriceState, action) => {
    const partialPrice = INGREDIENTS_PRICES[action.ingrType];
    switch(action.type) {
        case actionTypes.INCREASE:
            return {
              ...state,
              totalPrice: state.totalPrice + partialPrice
            };
        case actionTypes.DECREASE:
            return {
              ...state,
              totalPrice: state.totalPrice - partialPrice
            };
    }
    return state;
};

export default totalPriceReducer;
