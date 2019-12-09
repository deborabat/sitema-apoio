// @flow
import React, { Component } from 'react';
import Home from '../components/Counter/Index';
import Counter from '../components/Counter/Index';

export default class ConterPage extends Component {
  render() {
    return <Counter history={this.props.history} />;
  }
}
