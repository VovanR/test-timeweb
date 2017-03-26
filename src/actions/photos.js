/* global VK */

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAILURE = 'GET_PHOTOS_FAILURE';
export const SET_ACTIVE_PHOTO = 'SET_ACTIVE_PHOTO';

const VK_API_METHOD = 'photos.getAll';

export const getPhotos = () => dispatch => {
  dispatch({type: GET_PHOTOS_REQUEST});

  VK.Api.call(VK_API_METHOD, {}, response => {
    if (response.response) {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: processResponse(response.response)
      });
      return;
    }

    dispatch({
      type: GET_PHOTOS_FAILURE,
      payload: {error: true}
    });
  });
};

function processResponse(response) {
  const [count, ...photos] = response;

  return {
    count,
    data: photos.map(item => ({
      id: item.pid,
      preview: item.src,
      photo: item.src_xxxbig,
      text: item.text
    }))
  };
}

export const setActivePhoto = photoSrc => dispatch => {
  dispatch({
    type: SET_ACTIVE_PHOTO,
    payload: {
      active: photoSrc
    }
  });
};
