import * as actionTypes from '../actions/actionTypes';

const ordersState = {
    orders: [],
    loading: false,
    ordersErr: false
}
const ordersReducer = (state = ordersState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_ORDERS_INIT:
          return {
            ...state,
            loading: true
          };
        case actionTypes.FETCH_ORDERS_SUCCESS:
          return {
            ...state,
            orders: action.orders,
            loading: false,
            ordersErr: false
          };
        case actionTypes.FETCH_ORDERS_FAIL:
          return {
            ...state,
            loading: false,
            ordersErr: action.error
          }
        default:
          return state;
    }
}

export default ordersReducer;
