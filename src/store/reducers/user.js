import { USER, USER_LOGIN, USER_LOGOUT, USER_ERROR } from '../actions/user';

const INITIAL_STATE = {
  isLoading: false,
  auth: false,
  error: null,
}

function user(state = INITIAL_STATE, {type, payload}) {
  switch(type) {
    case USER:
      return {
        ...state,
        auth: true,
        isLoading: true,
      };
    case USER_LOGIN:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    case USER_LOGOUT: 
        return INITIAL_STATE;
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        auth: false,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default user;