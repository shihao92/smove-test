import Axios from 'axios';

import {
  GET_VEHICLE,
  CLEAN_VEHICLE
} from './types';

export function getVehicles( urlList ) {
  return ( dispatch, getState ) => {
    let vehicleInfo = [];
    urlList.map( item => {
      Axios.get(
        item
      ).then( response => {
        vehicleInfo.push( response.data.name );
        if( vehicleInfo.length === urlList.length ) {
          dispatch( getVehiclesSuccess( vehicleInfo ) );
        }
      });
    });
  }
}

function getVehiclesSuccess( payload ) {
  return {
    type: GET_VEHICLE,
    payload
  }
}

export function cleanVehicle() {
  return {
    type: CLEAN_VEHICLE
  }
}