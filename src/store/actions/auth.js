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
      token: authData.idToken,
      userId: authData.localId
    }
}

export const authFail = (err) => {
    return {
      type: actionTypes.AUTH_FAIL,
      err
    }
}


export const logout = () => {
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
          axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBBduZPCZqNjJE6Oq88-ycGsh7rO92MKv0', authData)
          .then(res => {
            dispatch(authSuccess(res.data));
            dispatch(checkAuthTimeout(res.data.expiresIn))
          })
          .catch(err => {
            dispatch(authFail(err))
          })
      } else { //make a request for login
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBBduZPCZqNjJE6Oq88-ycGsh7rO92MKv0', authData)
        .then(res => {
          dispatch(authSuccess(res.data))
          dispatch(checkAuthTimeout(res.data.expiresIn))

        })
        .catch(err => {
          dispatch(authFail(err))
        })
      }

    }
}
