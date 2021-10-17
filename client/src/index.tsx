import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from '@store/configureStore';
import { history } from '@utils';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from '@containers';
import '@assets/index.scss';

const config = configureStore();
export const { store, persistor } = config;
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  root,
);
