/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import Channel from './components/channel.js';
import Channels from './components/channels.js';

import React, { Component } from 'react';
import {
  Navigator,
  View,
  StyleSheet,
} from 'react-native';

export default class Anitar extends Component {
    renderScene(route, nav) {
        switch(route.id){
            case "Channels":
                return <Channels title={"Rásir"} navigator={nav} {...route.props} />
            case "Channel":
                return <Channel onBack={() => { nav.pop() }} title={route.name} url={route.url} navigator={nav} {...route.props} />
        }
    }

    render() {
        return (
            <View style={styles.container}>
                  <Navigator
                        initialRoute={{ id: "Channels", title: 'Rásir', url: 'http://apis.is/tv/' }}
                        renderScene={(route, navigator) =>
                          {return this.renderScene(route, navigator)}
                        }
                        pushTo

                  />
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