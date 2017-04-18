import React, { Component } from 'react';
import {
  Navigator,
  View,
  StyleSheet,
} from 'react-native';
import Channel from './containers/Channel.js'
import Channels from './containers/Channels.js'

export default class App extends Component {
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