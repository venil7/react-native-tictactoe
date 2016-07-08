import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import indexStyles from './index.styles';
import Button from 'react-native-button';
import { changeView } from '../../redux/reducer';
import routes from '../app/routes';

const styles = StyleSheet.create(indexStyles);

class Index extends Component {

  handleStartGame() {
    const { navigator } = this.props;
    navigator.push(routes.GAME);
  }

  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Darkruby TicTacToe
        </Text>
        <Text style={styles.instructions}>
          click play to start
        </Text>
        <Button
          containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'blue' }}
          style={{ fontSize: 20, color: 'white' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this.handleStartGame()}>
          Start the game..
        </Button>
      </View>
    );
  }
};

export default connect()(Index);