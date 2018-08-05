import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

export default withScriptjs( withGoogleMap( props => {
  if( props.coordinatesType === 'pickup' ) {
    return (
      <GoogleMap
        ref={ props.onPickupMapMounted }
        defaultZoom={10}
        defaultCenter={{
          lat: 1.306,
          lng: 103.81
        }}>
        {
          props.markerCoordinates.map( item => {
            return (
              <Marker
                key={ item.id }
                onClick={ () => props.onClickMarker( item ) }
                position={{ lat: item.pickup.lat, lng: item.pickup.lng }} />
            )
          })
        }
      </GoogleMap>
    )
  }
  if( props.coordinatesType === 'dropoff' ) {
    return (
      <GoogleMap
        ref={ props.onDropoffMapMounted }
        defaultZoom={12}
        defaultCenter={{
          lat: 1.306,
          lng: 103.81
        }}>
        {
          props.markerCoordinates.map( item => {
            return (
              <Marker
                key={ item.id }
                onClick={ () => props.onClickMarker( item ) }
                position={{ lat: item.dropoff.lat, lng: item.dropoff.lng }} />
            )
          })
        }
      </GoogleMap>
    )
  }
}));