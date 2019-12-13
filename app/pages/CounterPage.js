// @flow
import React, { Component } from 'react';
import Counter from '../components/Counter/Index';

export default class ConterPage extends Component {
  render() {
    return <Counter history={this.props.history} />;
  }
}
