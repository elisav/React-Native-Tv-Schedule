/**
 * Channel Page
 * To-do: break down into further components, rework styles.
 * @flow
 */

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