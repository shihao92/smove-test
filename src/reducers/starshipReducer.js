import {
  GET_STARSHIP,
  CLEAN_STARSHIP
} from '../actions/types';
import initialState from './initialState';

export default function starshipReducer( state = initialState, action ) {
  switch( action.type ) {
    case GET_STARSHIP:
      return {
        ...state,
        retrievedStarshipsNames: action.payload
      }

    case CLEAN_STARSHIP:
      return {
        ...state,
        retrievedStarshipsNames: []
      };
    default: return state;
  }
}