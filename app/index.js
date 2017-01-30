/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/app'

import tvApp from './reducers'

let store = createStore(tvApp)

import React, { Component } from 'react';
import {
  Navigator,
  View,
  StyleSheet,
  AppRegistry,
} from 'react-native';

export default class Anitar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Provider store={store}>
                  <App />
                </Provider>
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

AppRegistry.registerComponent('Root', () => Root);