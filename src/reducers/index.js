import { combineReducers } from 'redux';

import ajaxStatusReducer from './ajaxStatusReducers';
import bookingReducer from './bookingReducers';

export default combineReducers({
  ajaxStatusReducer,
  bookingReducer
});