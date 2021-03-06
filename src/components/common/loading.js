import React, { Component } from 'react';
import ReactLottie from 'react-lottie';

import LottieLoading from '../../assets/lottie/loading.json';

class Loading extends Component {
  render() {
    const options = {
      loop: true,
      autoplay: true,
      animationData: LottieLoading
    };

    return (
      <div className={ this.props.showLoader ? '' : 'hidden' }>
        <ReactLottie
          options={ options }
          height={ this.props.height }
          width={ this.props.width }>
        </ReactLottie>
      </div>
    )
  }
}

export default Loading;