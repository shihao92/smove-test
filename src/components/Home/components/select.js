import React, { Component } from 'react';
import ReactSelect from 'react-select';
import _ from 'lodash';

class Select extends Component {
  constructor() {
    super();
    this.state = {
      uniqueDataArray: []
    };
  }

  componentWillReceiveProps( nextProps ) {
    let tmpArray = nextProps.data;
    let uniqueDataArray = _.uniqBy( tmpArray, 'label' );
    this.setState({ uniqueDataArray: uniqueDataArray });
  }

  onChange( value ) {
    this.props.onChangeUser( value );
  }

  render() {
    return (
      <ReactSelect
        placeholder={ this.props.placeholder }
        options={ this.state.uniqueDataArray }
        onChange={ value => this.onChange( value ) } />
    )
  }
}

export default Select;