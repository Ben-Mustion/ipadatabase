import { FETCH_ERRORS, CLEAR_ERRORS } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case CLEAR_ERRORS:
      return null;
    case FETCH_ERRORS:
      return action.payload;
    default:
      return state;
  }
};
