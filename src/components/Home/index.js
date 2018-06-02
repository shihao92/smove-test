import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getListCharacters } from '../../actions/people';

import Loader from '../common/loading';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }

  componentWillReceiveProps( nextProps ) {
    if( nextProps.data.ajaxStatusReducer.ajaxCallProgress > 0 ) {
      this.setState({
        loading: true
      });
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentDidMount() {
    this.props.getListCharacters();
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome to Star Wars Information Corner!</h1>
        <ul>
          {

          }
        </ul>

        <Loader
          showLoader={ this.state.loading } />
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
  getListCharacters
})( Home );