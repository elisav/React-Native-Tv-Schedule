import React, { Component } from 'react';

import {
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

export default class Channel extends Component {
    render() {
        const { value, onChange, options } = this.props
        return (
            <View style={styles.container}>
                <Text>Hey!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row'
  },
  backButton: {
    backgroundColor: '#111',
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 5,
    width: 100,
    borderRadius: 10
  },
  backButtonText: {
    color: '#FFFFFF',
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#FFCC00',
  },
  title: {
    color: '#39393A',
    fontSize: 40,
    margin: 5,
    justifyContent: 'flex-start',
    textAlign: 'center',
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    flex: 1
  },

  channel: {
    margin: 5,
    alignSelf: 'stretch',
    backgroundColor: '#111',
    marginBottom: 30,
  },

  scheduleItem: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  scheduleText: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    fontSize: 20,
    fontFamily: 'sans-serif-condensed'
  },
  scheduleTitle: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
  },

});