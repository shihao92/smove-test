import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModalInfo extends Component {
  constructor() {
    super();
    this.state = {
      smallLoading: false,
      filmInfo: []
    };
  }

  componentWillReceiveProps( nextProps ) {
    this.setState({
      filmInfo: nextProps.data.filmReducer.retrievedFilmNames
    });
  }

  _renderCharacterInformation() {
    return (
      <div className="modal-body">
        <p>Name: { this.props.foundCharacter.name }</p>
        <p>Birth Year: { this.props.foundCharacter.birth_year }</p>
        <p>Eye Color: { this.props.foundCharacter.eye_color }</p>
        <p>Gender: { this.props.foundCharacter.gender }</p>
        <p>Hair Color: { this.props.foundCharacter.hair_color }</p>
        <p>Skin Color: { this.props.foundCharacter.skin_color }</p>
        <p>Height: { this.props.foundCharacter.height }</p>
        <p>Mass: { this.props.foundCharacter.mass }</p>
        <div>
          <p>Film(s) involved:</p>
          <ul>
          {
            this.state.filmInfo.map( item => {
              return (
                <li key={ item }>{ item }</li>
              )
            })
          }
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const showModal = param => param ? 'show' : '';

    return (
      <div
        className={ `modal fade ${ showModal( this.props.modalVisible ) }` }
        style={{ display: this.props.modalVisible ? 'block' : 'none' }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Extra Information</h5>
              <button
                className="close"
                onClick={ this.props.onRequestClose }>x</button>
            </div>
            { this._renderCharacterInformation() }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    data: state
  }
}

export default connect( mapStateToProps )( ModalInfo );