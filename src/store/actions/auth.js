import * as actionTypes from './actionTypes';
import axios from 'axios';

const dotenv = require('dotenv').config();
const FIREBASE_KEY = `${process.env.REACT_APP_FIREBASE_KEY}`;

export const authInit = () => {
    return {
      type: actionTypes.AUTH_INIT
    }
}

export const authSuccess = (token, userId) => {
    return {
      type: actionTypes.AUTH_SUCCESS,
      token,
      userId
    }
}

export const authFail = (err) => {
    return {
      type: actionTypes.AUTH_FAIL,
      err
    }
}


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    return {
      type: actionTypes.AUTH_LOGOUT
    }
};

export const checkAuthTimeout = (expiration) => {
    return dispatch => {
        setTimeout(() => {
          dispatch(logout())
        }, expiration * 1000)
    }
}




export const auth = (email, password, isSignUp) => {
    return dispatch => {
      dispatch(authInit());
      const authData = {
        email,
        password,
        returnSecureToken: true
      };

      if(isSignUp) { //make a reguest for signUp
          axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE_KEY}`, authData)
          .then(res => {
            dispatch(authSuccess(res.data.idToken, res.data.localId));
            dispatch(checkAuthTimeout(res.data.expiresIn))
          })
          .catch(err => {
            dispatch(authFail(err))
          })
      } else { //make a request for login
        axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${FIREBASE_KEY}`, authData)
        .then(res => {
          localStorage.setItem('token', res.data.idToken); //when succesfully loggedIn setItem on localstorage
          localStorage.setItem('userId', res.data.localId);
          dispatch(authSuccess(res.data.idToken, res.data.localId))
          dispatch(checkAuthTimeout(res.data.expiresIn))

        })
        .catch(err => {
          dispatch(authFail(err))
        })
      }

    }
}
