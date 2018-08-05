import { GET_BOOKINGS } from '../actions/types';
import initialState from './initialState';
import Memoize from 'fast-memoize';

const Memoized = Memoize( param => param );

export default function BookingReducer( state = initialState, action ) {
  switch( action.type ) {
    case GET_BOOKINGS:
      return {
        type: GET_BOOKINGS,
        bookings: action.payload
      };

    default: return state;
  }
}