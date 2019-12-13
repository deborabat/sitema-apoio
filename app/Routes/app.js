import React, { Component } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// import AppLayout from "../../layout/AppLayout";

import ReportPage from '../pages/ReportPage'
import RegisterPage from '../pages/RegisterPage'
import RegisterRoomPage from '../pages/RegisterRoomPage'
import ReservePage from '../pages/ReservePage'
import ReserveListPage from '../pages/ReserveListPage'
import Navbar from '../components/Navbar'
import CounterPage from '../pages/CounterPage'
import ListRoomPage from "../pages/ListRoomPage"
import ListReportPage from "../pages/ListReportPage"


export default class App extends Component {
  render() {
    const { match } = this.props;
    return (
      <>
        <Navbar history={this.props.history} />
        <Switch>
          <Route path={`/app/list-report`} component={ListReportPage} />
          <Route path={`/app/counter`} component={CounterPage} />
          <Route path={`/app/report`} component={ReportPage} />
          <Route path={`/app/register-room`} component={RegisterRoomPage} />
          <Route path={'/app/list-room'} component={ListRoomPage} />
          <Route path={`/app/register`} component={RegisterPage} />
          <Route path={`/app/reserve/:date`} component={ReserveListPage} />
          <Route path={`/app/reserve`} component={ReservePage} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

