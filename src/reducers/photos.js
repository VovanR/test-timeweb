import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE
} from '../actions/photos';

const initialState = {isLoading: true};

export default function photos(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST: {
      return {isLoading: true};
    }
    case GET_PHOTOS_SUCCESS: {
      return action.payload;
    }
    case GET_PHOTOS_FAILURE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
