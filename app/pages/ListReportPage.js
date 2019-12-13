// @flow
import React, { Component } from 'react';
import ListReport from '../components/listReport/Index';

export default class ListReportPage extends Component {
  render() {
    return <ListReport history={this.props.history} />;
  }
}
