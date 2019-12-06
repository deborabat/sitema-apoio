import React, { Component } from 'react';
import Register from '../components/Register/Index';

// import { Container } from './styles';

export default class RegisterPage extends Component {
  render() {
    return <Register history={this.props.history} />;
  }
}
