import Axios from 'axios';

import { GET_LIST_CHAR } from './types';
import {
  beginAjaxCall,
  ajaxCallSuccess,
  ajaxCallError
} from './ajax';

const DOMAIN = 'https://swapi.co/api/';

export function getListCharacters() {
  return ( dispatch, getState ) => {
    dispatch( beginAjaxCall() );
    Axios.get(
      `${ DOMAIN }people`
    ).then( response => {
      dispatch( getListCharactersSuccess( response.data.results ) );
      dispatch( ajaxCallSuccess( 'success' ) );
    }).catch( error => {
      dispatch( ajaxCallError( error ) );
    });
  };
}

function getListCharactersSuccess( payload ) {
  return {
    type: GET_LIST_CHAR,
    payload
  }
}