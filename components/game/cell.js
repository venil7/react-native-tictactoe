import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { Field } from '../../engine/lib/engine';

const nought = require('./img/nought.png');
const cross = require('./img/cross.png');
const empty = require('./img/transp.png');

class Cell extends Component {
  render() {
    const { cell, onPress, index } = this.props;
    const source = (cell === Field.Cross)
      ? cross : (cell == Field.Nought) ? nought : empty;
    return (
      <View style={{borderWidth: 1, margin: 2, borderRadius: 15, borderColor: 'black', height: 128}}>
        <TouchableHighlight
          onPress={() => onPress(index)}>
          <Image 
            source={source} 
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default Cell;