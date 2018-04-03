import {
  AUTH_EMAIL_CHANGED,
  AUTH_LOGIN_USER_ATTEMPT,
  AUTH_LOGIN_USER_FAIL,
  AUTH_LOGIN_USER_SUCCESS,
  AUTH_PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log('action: ', action, 'state: ', state);

  switch (action.type) {
    case AUTH_EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case AUTH_LOGIN_USER_ATTEMPT:
      return { ...state, loading: true, error: '' }
    case AUTH_LOGIN_USER_FAIL:
      return { ...state, error: 'Login failed.', password: '', loading: false }
    case AUTH_LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false, email: '', password: '', error: '' }
    case AUTH_PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    default:
      return state;
  }
}
