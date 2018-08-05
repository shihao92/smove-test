import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

import CustomSelect from './select';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      bookings: [],
      initialBookings: [],
      currentPageIndexSelected: 1,
      userSelectionsFilter: []
    }
  }

  componentWillReceiveProps( nextProps ) {
    this.setState({
      initialBookings: nextProps.data,
      bookings: nextProps.data
    });
    this.createUserArray();
  }

  handlePageChange( data ) {
    this.setState({
      currentPageIndexSelected: data.selected + 1
    });
  }

  createUserArray() {
    let tmpArray = [];
    this.state.bookings.map( item => {
      let tmpObj = { value: '', label: '' };
      tmpObj.value = item.user.name;
      tmpObj.label = item.user.name;
      tmpArray.push( tmpObj );
    });
    this.setState({ userSelectionsFilter: tmpArray });
  }

  onFilterByUser( value ) {
    let tmpBookings = this.state.initialBookings;
    let result = _.filter( tmpBookings, data => data.user.name === value.value );
    this.setState({ bookings: result });
  }

  onResetFilter() {
    let tmpBookings = this.state.initialBookings;
    this.setState({
      bookings: tmpBookings
    });
  }

  _renderTableContent( item ) {
    return (
      <tr key={ item.id }>
        <td>{ item.book_start }</td>
        <td>{ item.book_end }</td>
        <td>{ item.user.name }</td>
        <td>{ item.car.licence_plate }</td>
        <td>{ item.dropoff.code }</td>
        <td>{ item.pickup.code }</td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <div style={{ paddingTop: '24px', paddingBottom: '36px' }}>
          <h3>Filter</h3>
          <CustomSelect
            placeholder={ 'Choose user' }
            data={ this.state.userSelectionsFilter }
            onChangeUser={ value => this.onFilterByUser( value ) } />
          <button
            style={{ marginTop: '16px' }}
            className="btn btn-warning btn-md"
            onClick={ () => this.onResetFilter() }>Reset Filter</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Booking Start</th>
              <th>Booking End</th>
              <th>User Name</th>
              <th>Car Plate</th>
              <th>Car Dropoff Location</th>
              <th>Car Pickup Location</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.bookings.map(( item, index ) => {
                if( this.state.currentPageIndexSelected === 1 ) {
                  if( index <= this.state.currentPageIndexSelected * 10 ) {
                    return this._renderTableContent( item )
                  }
                } else {
                  if( index > (( this.state.currentPageIndexSelected - 1 ) * 10 ) &&
                    index <= this.state.currentPageIndexSelected * 10 ) {
                    return this._renderTableContent( item )
                  }
                }
              })
            }
          </tbody>
        </table>
        <ReactPaginate
          pageCount={ parseInt(this.state.bookings.length / 10) }
          marginPagesDisplayed={ 2 }
          pageRangeDisplayed={ 5 }
          previousLabel={ "previous" }
          nextLabel={ "next" }
          containerClassName={ "pagination" }
          subContainerClassName={ "pages pagination" }
          activeClassName={ "active" }
          pageLinkClassName={ "btn btn-default btn-md" }
          previousClassName={ "btn btn-default btn-md ml-auto" }
          nextClassName={ "btn btn-default btn-md mr-auto" }
          onPageChange={ data => this.handlePageChange( data ) } />
      </div>
    )
  }
}

export default Table;