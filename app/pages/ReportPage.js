import React, { Component } from 'react';
import Report from '../components/Report/Index';

// import { Container } from './styles';

export default class ReportPage extends Component {
  render() {
    return <Report history={this.props.history} />;
  }
}
