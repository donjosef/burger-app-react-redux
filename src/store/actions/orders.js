import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const fetchOrdersSuccess = (orders) => {
    return {
      type: actionTypes.FETCH_ORDERS_SUCCESS,
      orders
    }
};

export const fetchOrdersFail = (error) => {
    return {
      type: actionTypes.FETCH_ORDERS_FAIL,
      error
    }
};

export const fetchOrdersInit = () => {
    return {
      type: actionTypes.FETCH_ORDERS_INIT
    }
}

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersInit()); //before start the async code, dispatch this sync which sets loading true
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`
        axios.get('/orders.json' + queryParams) //get only orders that have a specific userId for that particular user
        .then(res => {
            const orders = [];
            for(let key in res.data) {
              orders.push({
                  ...res.data[key],
                  id: key
              });
            }
            dispatch(fetchOrdersSuccess(orders)) //now handled by redux thunk thanks to middleware. Before was this.setState({ orders })
        })
        .catch(err => {
           dispatch(fetchOrdersFail(err))
        })
    }
}
