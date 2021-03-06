import { USER_FOLLOWERS, RESET_USER_FOLLOWERS } from '../actions/followers';

const INITIAL_STATE = []

function followers(state = INITIAL_STATE, { type, payload }) {
  switch(type) {
    case USER_FOLLOWERS:
      return payload;
    case RESET_USER_FOLLOWERS:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default followers;