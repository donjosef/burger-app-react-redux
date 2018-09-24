import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authInit = () => {
    return {
      type: actionTypes.AUTH_INIT
    }
}

export const authSuccess = (authData) => {
    return {
      type: actionTypes.AUTH_SUCCESS,
      authData
    }
}

export const authFail = (err) => {
    return {
      type: actionTypes.AUTH_FAIL,
      err
    }
}

export const auth = (email, password) => {
    return dispatch => {
      dispatch(authInit());
      const authData = {
        email,
        password,
        returnSecureToken: true
      };
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBBduZPCZqNjJE6Oq88-ycGsh7rO92MKv0', authData)
      .then(res => {
        console.log(res)
        authSuccess(res.data)
      })
      .catch(err => {
        console.log(err)
        authFail(err)
      })

    }
}
