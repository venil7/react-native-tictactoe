import React, { Component } from 'react';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import { View } from 'react-native';
import Cell from './cell';

class Board extends Component {
  render() {
    const colprops = { sm: 4, md: 4, lg: 4 };
    const { onCellPress, board: { fields } } = this.props;
    const indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <View>
        <Row sm={12}>
          {indexes.map((i) => (
            <Col key={i} {...colprops}>
              <Cell
                index={i}
                cell={fields[i]}
                onPress={(i) => onCellPress(i)}
              />
            </Col>
          ))}
        </Row>
      </View>
    );
  }
}

export default Board;
