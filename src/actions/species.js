import Axios from 'axios';

import {
  GET_SPECIES,
  CLEAN_SPECIES
} from './types';

export function getSpecies( url ) {
  return ( dispatch, getState ) => {
    Axios.get(
      url
    ).then( response => {
      dispatch( getSpeciesSuccess( response.data.name ) );
    });
  }
}

function getSpeciesSuccess( payload ) {
  return {
    type: GET_SPECIES,
    payload
  }
}

export function cleanSpecies() {
  return {
    type: CLEAN_SPECIES
  }
}

