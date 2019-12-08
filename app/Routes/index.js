import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import App from '../pages/App';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import { connect } from 'react-redux'

import app from './app'

const AuthRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authUser ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

class Routes extends Component {
  render() {
    return (
      <App>
        <BrowserRouter>
          <Switch>
            <AuthRoute path="/app" authUser={localStorage.getItem("token")} component={app} />
            {/* <Route path={"/register-room"} component={RegisterRoomPage} /> */}
            <Route path="/login" component={LoginPage} />
            {/* <Route path={"/register"} component={RegisterPage} /> */}
            <Route path={"/"} component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </App >
    )
  }
}
const mapStateToProps = ({ auth }) => {
  const { user } = auth
  return ({
    user
  })
}
export default connect(mapStateToProps, null)(Routes)
