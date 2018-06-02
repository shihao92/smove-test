import {
  GET_HOMEWORLD,
  CLEAN_HOMEWORLD
} from '../actions/types';
import initialState from './initialState';

export default function HomeworldReducer( state = initialState, action ) {
  switch( action.type ) {
    case GET_HOMEWORLD:
      return {
        ...state,
        homeworld: action.payload
      };

    case CLEAN_HOMEWORLD:
      return {
        ...state,
        homeworld: ''
      };
    default: return state;
  }
}