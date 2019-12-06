// @flow
import React, { Component } from 'react';
import Home from '../components/Home/Index';

export default class HomePage extends Component {
  render() {
    return <Home history={this.props.history} />;
  }
}

