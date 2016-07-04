import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import appStyles from './app.styles';

import Index from '../index/index';
import Game from '../game/game';

const styles = StyleSheet.create(appStyles);

class App extends Component {
  render() {
    const { state: {view}, state } = this.props;
    let page = null;
    switch (view) {
       case 'game': {
         page = <Game state={state} />;
         break;
       }
       case 'index': 
       default: {
         page = <Index state={state} />;
         break;
       } 
    }
    return (
      <View style={styles.container}>
        {page}
      </View>
    );
  }
}

export default connect((state) => ({ state }))(App);