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
        case 'INCREASE':
            return {
              ...state,
              totalPrice: state.totalPrice + partialPrice
            };
        case 'DECREASE':
            return {
              ...state,
              totalPrice: state.totalPrice - partialPrice
            };
    }
    return state;
};

export default totalPriceReducer;
