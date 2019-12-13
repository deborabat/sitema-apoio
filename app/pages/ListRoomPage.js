// @flow
import React, { Component } from 'react';
import ListRoom from '../components/ListRoom/Index';

export default class ListRoomPage extends Component {
  render() {
    return <ListRoom history={this.props.history} />;
  }
}
