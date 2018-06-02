import {
  GET_LIST_CHAR
} from '../actions/types';
import initialState from './initialState';

export default function CharacterReducer( state = initialState, action ) {
  switch( action.type ) {
    case GET_LIST_CHAR:
      return {
        ...state,
        characterList: action.payload
      }

    default: return state;
  }
}