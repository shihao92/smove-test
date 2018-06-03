import Axios from 'axios';

import {
  GET_STARSHIP,
  CLEAN_STARSHIP
} from './types';

export function getStarships( urlList ) {
  return ( dispatch, getState ) => {
    let starshipInfo = [];
    urlList.map( item => {
      Axios.get(
        item
      ).then( response => {
        starshipInfo.push( response.data.name );
        if( starshipInfo.length === urlList.length ) {
          dispatch( getStarshipsSuccess( starshipInfo ) );
        }
      });
    });
  }
}

function getStarshipsSuccess( payload ) {
  return {
    type: GET_STARSHIP,
    payload
  }
}

export function cleanStarship() {
  return {
    type: CLEAN_STARSHIP
  }
}