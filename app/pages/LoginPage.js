import React, { Component } from 'react';
import Login from '../components/Login/Index';

// import { Container } from './styles';

export default class LoginPage extends Component {
  componentDidMount() {
    console.log({ propsPage: this.props })
  }
  render() {
    return <Login history={this.props.history} />;
  }
}

