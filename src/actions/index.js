import firebase from 'firebase';

import {
  AUTH_EMAIL_CHANGED,
  AUTH_LOGIN_USER_ATTEMPT,
  AUTH_LOGIN_USER_FAIL,
  AUTH_LOGIN_USER_SUCCESS,
  AUTH_PASSWORD_CHANGED
} from './types';

export const emailChanged = (text) => {
  return {
    type: AUTH_EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: AUTH_PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: AUTH_LOGIN_USER_ATTEMPT});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: AUTH_LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: AUTH_LOGIN_USER_SUCCESS,
    payload: user,
  });
};
