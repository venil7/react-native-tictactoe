import React, { Component } from 'react';
import { connect } from 'react-redux';
import { humanMoveThunk } from '../../redux/reducer';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Board from './board';

class Game extends Component {

  humanMove(index) {
    const { dispatch } = this.props;
    return dispatch(humanMoveThunk(index));
  }

  render() {
    const { state: { board } } = this.props;
    return (
      <View style={{ width: 100 }}>
        <Board
          board={board}
          onCellPress={(i) => this.humanMove(i)}
        />
      </View>
    );
  }
};

export default connect((state) => ({ state }))(Game);