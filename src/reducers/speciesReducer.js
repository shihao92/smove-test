import {
  GET_SPECIES,
  CLEAN_SPECIES
} from '../actions/types';
import initialState from './initialState';

export default function SpeciesReducer( state = initialState, action ) {
  switch( action.type ) {
    case GET_SPECIES:
      return {
        ...state,
        species: action.payload
      };

    case CLEAN_SPECIES:
      return {
        ...state,
        species: ''
      };

    default: return state;
  }
}