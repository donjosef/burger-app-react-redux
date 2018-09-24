import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_INIT:
            return {
              ...state,
              loading: true
            };
        case actionTypes.AUTH_SUCCESS:
            return {
              token: action.token,
              userId: action.userId,
              loading: false,
              error: false
            };
        case actionTypes.AUTH_FAIL:
            return {
              ...state,
              error: action.error,
              loading: false
            };
        default:
          return state;
    }
};

export default reducer;
