export const AUTHORIZE_REQUEST = 'AUTHORIZE_REQUEST';
export const AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS';
export const AUTHORIZE_FAILURE = 'AUTHORIZE_FAILURE';

const VK_API_URL = 'https://oauth.vk.com/authorize';
const params = [
  {
    name: 'client_id',
    value: '5948464'
  },
  {
    name: 'redirect_uri',
    value: encodeURIComponent('http://localhost:3000/')
  },
  {
    name: 'display',
    value: 'popup'
  },
  {
    name: 'scope',
    value: '+4'
  },
  {
    name: 'response_type',
    value: 'token'
  },
  {
    name: 'v',
    value: '5.63'
  },
];

export const authorize = () => dispatch => {
  dispatch({type: AUTHORIZE_REQUEST});

  let paramsString = params.reduce((a, b) => {
    return `${a}${b.name}=${b.value}&`;
  }, '?');
  paramsString = paramsString.slice(0, -1);
  window.location.href = `${VK_API_URL}${paramsString}`;
};
