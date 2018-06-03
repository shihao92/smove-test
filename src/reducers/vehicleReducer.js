import {
  GET_VEHICLE,
  CLEAN_VEHICLE
} from '../actions/types';
import initialState from './initialState';

export default function VehicleReducer( state = initialState, action ) {
  switch( action.type ) {
    case GET_VEHICLE:
      return {
        ...state,
        retrievedVehiclesNames: action.payload
      }

    case CLEAN_VEHICLE:
      return {
        ...state,
        retrievedVehiclesNames: []
      };

    default: return state;
  }
}