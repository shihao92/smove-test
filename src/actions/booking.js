import Axios from 'axios';

import { GET_BOOKINGS } from './types';

export function getBookings( url ) {
  return ( dispatch, getState ) => {
    Axios.get( url, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then( response => {
      dispatch( getBookingsSuccess( response.data ) );
    }).catch( error => {
      console.dir( error, 'error' );
    });
  }
}

function getBookingsSuccess( payload ) {
  return {
    type: GET_BOOKINGS,
    payload
  }
}