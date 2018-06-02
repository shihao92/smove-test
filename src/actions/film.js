import Axios from 'axios';

import { GET_FILM, CLEAR_FILM } from './types';
import {
  beginAjaxCall,
  ajaxCallSuccess,
  ajaxCallError
} from './ajax';

export function getFilm( urlList ) {
  return ( dispatch, getState ) => {
    let filmsInfo = [];
    urlList.map( item => {
      Axios.get(
        item
      ).then( response => {
        filmsInfo.push( response.data.title );
        if( filmsInfo.length === urlList.length ) {
          dispatch( getFilmSuccess( filmsInfo ) );
        }
      });
    });
  }
}

function getFilmSuccess( payload ) {
  return {
    type: GET_FILM,
    payload
  }
}

export function clearFilmArray() {
  return ( dispatch, getState ) => {
    dispatch( clearFilm() );
  };
}

function clearFilm() {
  return {
    type: CLEAR_FILM
  }
}