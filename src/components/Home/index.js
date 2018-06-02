import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getListCharacters } from '../../actions/people';
import { getFilm, clearFilmArray } from '../../actions/film';
import { getHomeworld, cleanHomeworld } from '../../actions/homeworld';
import { getSpecies, cleanSpecies } from '../../actions/species';

import Loader from '../common/loading';
import ModalInfo from '../common/modalInfo';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      globalLoading: false,
      characterList: [],
      extraInfoDisplay: false,
      foundCharacter: {}
    };
  }

  componentWillReceiveProps( nextProps ) {
    if( nextProps.data.ajaxStatusReducer.ajaxCallProgress > 0 ) {
      this.setState({
        globalLoading: true
      });
    } else {
      this.setState({
        globalLoading: false
      });
    }
    if( nextProps.data.charReducer.characterList.length > 0 ) {
      this.setState({
        characterList: nextProps.data.charReducer.characterList
      });
    }
  }

  componentDidMount() {
    this.props.getListCharacters();
  }

  onClickExtraInfo( name ) {
    let searchItem = _.find( this.state.characterList, function( item ) {
      return item.name === name
    });
    this.props.getFilm( searchItem.films );
    this.props.getHomeworld( searchItem.homeworld );
    this.props.getSpecies( searchItem.species[0] );
    this.setState({
      foundCharacter: searchItem,
      extraInfoDisplay: true
    });
  }

  onRequestCloseModal() {
    this.setState({
      extraInfoDisplay: false
    });
    this.props.clearFilmArray();
    this.props.cleanHomeworld();
    this.props.cleanSpecies();
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome to Star Wars Information Corner!</h1>
        <ul>
          {
            this.state.characterList.map( data => {
              return (
                <li
                  key={ data.name }
                  style={{ minHeight: '55px' }}>
                  <span style={{ marginRight: '10px' }}>{ data.name }</span>
                  <button
                    className="btn btn-primary"
                    onClick={ () => this.onClickExtraInfo( data.name ) }>
                    Extra Information
                  </button>
                </li>
              )
            })
          }
        </ul>

        <ModalInfo
          modalVisible={ this.state.extraInfoDisplay }
          onRequestClose={ () => this.onRequestCloseModal() }
          foundCharacter={ this.state.foundCharacter } />

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
  getListCharacters,
  getFilm,
  clearFilmArray,
  getHomeworld,
  cleanHomeworld,
  getSpecies,
  cleanSpecies
})( Home );