import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from './pages/App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RegisterRoomPage from './pages/RegisterRoomPage';
import ReportPage from './pages/ReportPage';

export default () => (
  <App>
    <BrowserRouter>
      <Switch>

        <Route path={"/report"} component={ReportPage} />
        <Route path={"/register-room"} component={RegisterRoomPage} />
        <Route path={"/register"} component={RegisterPage} />
        <Route path={"/login"} component={LoginPage} />
        <Route path={"/"} component={HomePage} />

      </Switch>
    </BrowserRouter>
  </App >
);
