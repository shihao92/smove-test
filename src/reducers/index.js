import { combineReducers } from 'redux';

import ajaxStatusReducer from './ajaxStatusReducers';
import charReducer from './charReducer';
import filmReducer from './filmReducer';

export default combineReducers({
  ajaxStatusReducer,
  charReducer,
  filmReducer
});