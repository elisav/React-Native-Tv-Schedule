import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';

export default class Channels extends Component {
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
  channelText: {
   fontSize: 30,
   marginBottom: 45,
   marginTop: 45,
   margin: 5,
   textAlign: 'center',
   color: '#FFFFFF',
   fontFamily: 'sans-serif-condensed'
  },

});