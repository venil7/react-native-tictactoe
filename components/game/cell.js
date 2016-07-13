import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Field } from '../../engine/lib/engine';
import Button from 'react-native-button';

class Cell extends Component {
  render() {
    const { cell, onPress, index } = this.props;
    const display = (cell === Field.Cross)
      ? 'X' : (cell == Field.Nought) ? 'O' : '';
    return (
      <View style={{borderColor: 'black', borderRadius: 2, borderWidth: 2, margin: 2 }}>
        <Button
          containerStyle={{ padding: 10, height: 45, overflow: 'hidden' }}
          style={{ fontSize: 20, color: 'black' }}
          onPress={() => { onPress(index) }}>
          {display}
        </Button>
      </View>
    );
  }
}

export default Cell;