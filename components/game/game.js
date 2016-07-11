import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Board from './board';

class Game extends Component {
  render() {
    return (
      <View>
        <Board />
      </View>
    );
  }
};

export default Game;