import Axios from 'axios';

import {
  GET_HOMEWORLD,
  CLEAN_HOMEWORLD
} from './types';

export function getHomeworld( url ) {
  return ( dispatch, getState ) => {
    Axios.get(
      url
    ).then( response => {
      dispatch( getHomeworldSuccess( response.data.name ) );
    });
  }
}

function getHomeworldSuccess( payload ) {
  return {
    type: GET_HOMEWORLD,
    payload
  }
}

export function cleanHomeworld() {
  return {
    type: CLEAN_HOMEWORLD
  }
}