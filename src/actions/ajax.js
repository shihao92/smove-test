import {
  BEGIN_AJAX_CALL,
  AJAX_CALL_ERROR,
  AJAX_CALL_SUCCESS
} from './types';

export function beginAjaxCall() {
  return {
    type: BEGIN_AJAX_CALL
  };
}

export function ajaxCallError( payload ) {
  return {
    type: AJAX_CALL_ERROR,
    payload
  }
}

export function ajaxCallSuccess( payload ) {
  type: AJAX_CALL_SUCCESS,
  payload
}