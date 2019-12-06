import React, { Component } from 'react';
import RegisterRoom from '../components/RegisterRoom/Index';

// import { Container } from './styles';

export default class RegisterRoomPage extends Component {
  render() {
    return <RegisterRoom history={this.props.history} />;
  }
}
