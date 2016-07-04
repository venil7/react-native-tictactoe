import React, { Component } from 'react';
import App from './components/app/app';
import {
  AppRegistry,
} from 'react-native';

import { Provider } from 'react-redux';
import getStore from './redux/store';

const store = getStore();

class AppTttoe extends Component {
  render() {
    return (
      <Provider store={store}>
       <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('tttoe', () => AppTttoe);
