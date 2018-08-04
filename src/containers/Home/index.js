// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    isMobile: PropTypes.bool
  };

  render() {
    const { isMobile } = this.props;

    return (
      <div className="Home">
        <h1>Home Page</h1>

        <h2>
          {isMobile ? 'Mobile device' : 'Desktop device'}
        </h2>
      </div>
    );
  }
}

export default connect(state => ({
  isMobile: state.device.isMobile
}), null)(Home);
