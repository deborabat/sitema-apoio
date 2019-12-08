import React, { Component } from 'react';
import Reserve from '../components/Reserve';

// import { Container } from './styles';

export default class ReservePage extends Component {
  render() {
    return <Reserve history={this.props.history} />;
  }
}
