export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAILURE = 'GET_PHOTOS_FAILURE';

const VK_API_URL = 'https://api.vk.com/method/';
const VK_API_METHOD = 'photos.getAll';

export const getPhotos = accessToken => dispatch => {
  dispatch({type: GET_PHOTOS_REQUEST});

  const params = [
    {
      name: 'access_token',
      value: accessToken
    },
    {
      name: 'v',
      value: '5.63'
    },
  ];
  let paramsString = params.reduce((a, b) => {
    return `${a}${b.name}=${b.value}&`;
  }, '?');
  paramsString = paramsString.slice(0, -1);
  const request = new Request(`${VK_API_URL}${VK_API_METHOD}${paramsString}.json`);

  fetch(request)
    .then(response => response.json())
    .then(processResponse)
    .then(data => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: GET_PHOTOS_FAILURE,
        payload: {error: error.message}
      });
    });
};

function processResponse(response) {
  return {
    count: response.count,
    data: response.response.items.map(item => ({
      id: item.id,
      preview: item.photo_130,
      photo: item.photo_2560,
      text: item.text
    }))
  };
}
