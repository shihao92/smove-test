import { combineReducers } from 'redux';

import ajaxStatusReducer from './ajaxStatusReducers';
import charReducer from './charReducer';
import filmReducer from './filmReducer';
import homeworldReducer from './homeworldReducer';
import speciesReducer from './speciesReducer';

export default combineReducers({
  ajaxStatusReducer,
  charReducer,
  filmReducer,
  homeworldReducer,
  speciesReducer
});