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

export const fetchOrders = () => {
    return dispatch => {
        axios.get('/orders.json')
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
