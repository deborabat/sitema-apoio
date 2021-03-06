// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import type { Store } from '../reducers/types';
import Routes from '../Routes';
import { NotificationContainer } from "../components/ReactNotifications";

type Props = {
  store: Store,
  history: {}
};

const Root = ({ store, history }) => (
  <Provider store={store}>

    <ConnectedRouter history={history}>
      <Routes />

    </ConnectedRouter>
    <NotificationContainer />
  </Provider>
);

export default hot(Root);
