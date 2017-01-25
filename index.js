/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator,
  Platform,
  ToolbarAndroid,
  Linking,
  Text,
  View,
  ListView,
  StyleSheet,
  AppRegistry,
  TouchableHighlight,
  ActivityIndicator
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


class Channels extends Component {
    constructor(props) {
        super(props);

        // List of values to later display rows

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            scheduleResponse: null,
            dataSource: this.ds.cloneWithRows(['']),
            UrlLookup: {},
            dataSourceSchedule: this.ds.cloneWithRows(['']),
            loading: true};
        this.fetchChannels();
    }

    // Get channel names and endpoints
    fetchChannels() {
        return fetch('http://apis.is/tv/')
        .then((response) => { return response.json() })
        .then((responseData) => {
            this.setState({dataSource: this.ds.cloneWithRows(responseData.results[0].channels), loading: false});
            return responseData;
        })
        .catch((error) => {
            console.error(error);
        })
        .done();
    }

    render() {
            return (
                <View style={styles.container}>
                    <View style={styles.toolbar}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>

                    <View>
                            {!this.state.loading &&
                            <ListView style={styles.channel} dataSource={this.state.dataSource} renderRow={(rowData) =>
                                <TouchableHighlight underlayColor='#0099FF' onPress={() => this.props.navigator.push({id: "Channel", name: rowData.name, url: rowData.endpoint})}>
                                    <View>
                                        <Text style={styles.channelText}>{rowData.name}</Text>
                                    </View>
                                 </TouchableHighlight>}
                             />
                            }
                            {!this.state.loading &&
                                <ActivityIndicator
                                    animating={this.state.animating}
                                    style={[{height: 80}]}
                                    size="large"
                                />
                            }
                    </View>
              </View>
            );
        }
}

class Channel extends Component {
    constructor(props) {
        super(props);
        // List of values to later display rows

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: this.ds.cloneWithRows(['']),
            loading: true,
            success: true };

        this.fetchSchedule('http://apis.is' + this.props.url);
    }



    // Get channel names and endpoints
    fetchSchedule(url) {
        return fetch(url)
        .then((response) => { return response.json() })
        .then((responseData) => {
            console.log(responseData);
            try{
                this.setState({dataSource: this.ds.cloneWithRows(responseData.results), loading: false, success: true});
            }
            catch(error){
                this.setState({loading: false, success: false});
            }
            return responseData;
        })
        .catch((error) => {
            console.error(error);
        })
        .done();
    }

    render() {
            return (
              <View style={styles.container}>
                <View style={styles.toolbar}>
                    <TouchableHighlight style={styles.backButton} underlayColor='#0099FF' onPress={this.props.onBack}>
                        <View><Text style={styles.backButtonText}>Tilbaka</Text></View>
                    </TouchableHighlight>

                    <Text style={styles.title}>{this.props.title}</Text>
                </View>

                    <View>
                        {this.state.loading == false && this.state.success == true &&
                            <ListView style={styles.channel} dataSource={this.state.dataSource} renderRow={(rowData) =>
                                <View style={styles.scheduleItem}>
                                    <Text style={styles.scheduleTitle}>{rowData.startTime}{"\n"}{rowData.title} ({rowData.duration})</Text>
                                    <Text style={styles.scheduleText}>
                                       {rowData.description}{"\n"}{"\n"}
                                    </Text>
                                </View>
                                }
                            />
                        }
                        {this.state.loading == true &&
                            <ActivityIndicator
                                animating={this.state.animating}
                                style={[{height: 80}]}
                                size="large"
                            />
                        }
                        {this.state.success == false &&
                            <Text>Eitthvað fór úrskeðis.</Text>
                        }
                    </View>
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