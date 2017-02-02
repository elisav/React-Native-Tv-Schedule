/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import Root from './containers/root'

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AppRegistry,
} from 'react-native';

export default class ReactNativeTvGuide extends Component {
    render() {
        return (
            <View style={styles.container}>
                  <Root />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#FFCC00',
  },
});