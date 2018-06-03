import {
  BEGIN_AJAX_CALL,
  AJAX_CALL_ERROR,
  AJAX_CALL_SUCCESS
} from '../actions/types';
import initialState from './initialState';

export default function ajaxStatusReducer( state = initialState, action ) {
  switch( action.type ) {
    case BEGIN_AJAX_CALL:
      return {
        ...state,
        ajaxCallProgress: state.ajaxCallProgress + 1
      };

    case AJAX_CALL_ERROR:
      return {
        ...state,
        ajaxCallProgress: state.ajaxCallProgress - 1,
        ajaxErrorMessage: action.payload
      };

    case AJAX_CALL_SUCCESS:
      return {
        ...state,
        ajaxCallProgress: state.ajaxCallProgress - 1,
        ajaxErrorMessage: action.payload
      };

    default: return state;
  }
}