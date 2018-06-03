import {
  GET_FILM,
  CLEAR_FILM
} from '../actions/types';
import initialState from './initialState';

export default function FilmReducer( state = initialState, action ) {
  switch( action.type ) {
    case GET_FILM:
      return {
        ...state,
        retrievedFilmNames: action.payload
      }

    case CLEAR_FILM:
      return {
        ...state,
        retrievedFilmNames: []
      };
    default: return state;
  }
}