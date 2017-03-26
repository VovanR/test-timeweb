/* global VK */

export const AUTHORIZE_REQUEST = 'AUTHORIZE_REQUEST';
export const AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS';
export const AUTHORIZE_FAILURE = 'AUTHORIZE_FAILURE';

export const authorize = () => dispatch => {
  dispatch({type: AUTHORIZE_REQUEST});

  VK.Auth.login(response => {
    switch (response.status) {
      case 'connected': {
        dispatch({
          type: AUTHORIZE_SUCCESS,
          payload: response
        });
        break;
      }
      default: {
        dispatch({
          type: AUTHORIZE_FAILURE,
          payload: {error: true}
        });
        break;
      }
    }
  }, 4);
};

export const getLoginStatus = () => dispatch => {
  dispatch({type: AUTHORIZE_REQUEST});

  VK.Auth.getLoginStatus(response => {
    switch (response.status) {
      case 'connected': {
        dispatch({
          type: AUTHORIZE_SUCCESS,
          payload: response
        });
        break;
      }
      default: {
        dispatch({
          type: AUTHORIZE_FAILURE,
          payload: {error: true}
        });
        break;
      }
    }
  });
};
