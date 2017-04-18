import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

export default class Channels extends Component {
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

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row'
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