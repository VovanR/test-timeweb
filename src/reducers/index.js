import {combineReducers} from 'redux';

import user from './user';
import photos from './photos';

export default combineReducers({
  user,
  photos
});
