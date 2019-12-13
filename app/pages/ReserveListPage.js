import React, { Component } from 'react';
import ReserveList from '../components/ReserveList';

// import { Container } from './styles';

export default class ReservePage extends Component {
  render() {
    return <ReserveList history={this.props.history} match={this.props.match} />;
  }
}
