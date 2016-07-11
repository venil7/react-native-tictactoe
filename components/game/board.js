import React, { Component } from 'react';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import { View } from 'react-native';
import Cell from './cell';

class Board extends Component {
  render() {
    return (
      <View>
        <Row size={12}>
          <Col sm={4} md={4} lg={4}>
            <Cell />
          </Col>
          <Col sm={4} md={4} lg={4}>
            <Cell />
          </Col>
          <Col sm={4} md={4} lg={4}>
            <Cell />
          </Col>
        </Row>
        <Row size={12}>
          <Col sm={4} md={4} lg={4}>
            <Cell />
          </Col>
          <Col sm={4} md={4} lg={4}>
            <Cell />
          </Col>
          <Col sm={4} md={4} lg={4}>
            <Cell />
          </Col>
        </Row>
      </View>
    );
  }
}

export default Board;