import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TouchableHighlight,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import routes from './routes';
import Index from '../index/index';
import Game from '../game/game';

import appStyles from './app.styles';
const styles = StyleSheet.create(appStyles);

class App extends Component {

  renderScene(route, navigator) {
    const { state } = this.props;
    const props = { route, navigator, state };
    let scene;
    switch (route.index) {
      case routes.ABOUT.index: {
        scene = (<Index {...props} />);
        break;
      }
      case routes.GAME.index: {
        scene = (<Game {...props} />);
        break;
      }
      case routes.ABOUT.index:
      default: {
        scene = (<Index {...props} />);
        break;
      }
    }

    return (
      <View style={styles.container}>
        {scene}
      </View>
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={routes.INDEX}
        renderScene={(route, navigator) => this.renderScene(route, navigator)}
      />
    );
  }
}


export default connect((state) => ({ state }))(App);