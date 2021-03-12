/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider, Provider as StoreProvider } from 'react-redux';
import configureStore from './store/store';

const store = configureStore();

const StoredApp = () =>
    <Provider store={store}>
        <App />
    </Provider>

AppRegistry.registerComponent(appName, () => StoredApp);
