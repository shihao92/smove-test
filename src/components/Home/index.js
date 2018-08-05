import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeModifier from '../../utils/timeModifier';

import Loader from '../common/loading';
import CustomMap from '../common/map';
import CustomTable from './components/table';

import { getBookings } from '../../actions/booking';

import { URL } from '../../config';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      globalLoading: false,
      bookings: [],
      viewMode: '',
      coordinatesType: 'dropoff',
      selectedCoordinate: {}
    };
  }

  componentWillReceiveProps( nextProps ) {
    if( nextProps.data.bookingReducer.bookings ) {
      TimeModifier( nextProps.data.bookingReducer.bookings );
      this.setState({
        globalLoading: false,
        bookings: nextProps.data.bookingReducer.bookings,
        viewMode: 'map'
      });
    }
  }

  componentDidMount() {
    this.setState({
      globalLoading: true
    });
    this.props.getBookings( URL );
  }

  onClickMapMarker( item ) {
    this.setState({ selectedCoordinate: item });
  }

  selectBookingType( type ) {
    this.setState({
      coordinatesType: type
    });
  }

  onPickupMapMounted( data ) {
    // console.log( data )
  }

  onDropoffMapMounted( data ) {
    // console.log( data )
  }

  _renderModeSelectionButton() {
    return (
      <div style={{ marginBottom: '16px' }}>
        <button
          className="btn btn-primary btn-lg mr-10"
          style={{ marginRight: '10px' }}
          onClick={ () => {
            this.setState({ viewMode: 'map' });
            this.props.getBookings( URL );
          }}>Map Mode</button>
        <button
          className="btn btn-primary btn-lg"
          onClick={ () => this.setState({ viewMode: 'table' }) }>Table Mode</button>
      </div>
    )
  }

  _renderTitle() {
    return (
      <div>
        <h2>Current View Mode: { this.state.viewMode }</h2>
      </div>
    )
  }

  _renderBookingDetails() {
    if( this.state.selectedCoordinate.user ) {
      return (
        <div style={{ marginTop: '16px' }}>
          <h3>Selected booking information</h3>
          <p>User name: { this.state.selectedCoordinate.user.name }</p>
          <p>Booking Start Time: { this.state.selectedCoordinate.book_start }</p>
          <p>Booking End Time: { this.state.selectedCoordinate.book_end }</p>
          <p>Car License Plate: { this.state.selectedCoordinate.car.licence_plate }</p>
          <p>Pickup Place: { this.state.selectedCoordinate.pickup.code }</p>
          <p>Dropoff Place: { this.state.selectedCoordinate.dropoff.code }</p>
        </div>
      )
    } else {
      return (
        <div style={{ marginTop: '16px' }}>
          <h3>Click on the marker on map to view booking details.</h3>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: '60px', height: '200vh' }}>
        <h1>Welcome to Smove booking logging application</h1>

        { this._renderModeSelectionButton() }

        { this._renderTitle() }

        {/* Google Map Representation */}
        <div style={{ display: this.state.viewMode === 'map' ? 'block' : 'none' }}>
          <div>
            <button
              className="btn btn-success btn-md"
              style={{ marginRight: '10px' }}
              onClick={ () => this.selectBookingType( 'pickup' ) }>Pickup Locations</button>
            <button
              className="btn btn-success btn-md"
              onClick={ () => this.selectBookingType( 'dropoff' ) }>Dropoff Locations</button>
            <h5 style={{ marginTop: '16px' }}>Current view: { this.state.coordinatesType }</h5>
          </div>
          <CustomMap
            isMarkerShown={ true }
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            markerCoordinates={ this.state.bookings }
            coordinatesType={ this.state.coordinatesType }
            onClickMarker={ item => this.onClickMapMarker( item ) }
            onPickupMapMounted={ data => this.onPickupMapMounted( data ) }
            onDropoffMapMounted={ data => this.onDropoffMapMounted( data ) } />
          { this._renderBookingDetails() }
        </div>

        {/* Data Table Representation */}
        <div style={{ display: this.state.viewMode === 'table' ? 'block' : 'none' }}>
          <CustomTable
            data={ this.state.bookings } />
        </div>

        <Loader
          showLoader={ this.state.globalLoading }
          height={ 150 }
          width={ 150 } />
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    data: state
  }
}

export default connect( mapStateToProps, {
  getBookings
})( Home );