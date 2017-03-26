import {
  AUTHORIZE_REQUEST,
  AUTHORIZE_SUCCESS,
  AUTHORIZE_FAILURE
} from '../actions/user';

const initialState = {isLoading: true};

export default function user(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZE_REQUEST: {
      return {isLoading: true};
    }
    case AUTHORIZE_SUCCESS: {
      return action.payload;
    }
    case AUTHORIZE_FAILURE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
