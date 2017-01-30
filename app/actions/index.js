export const VIEW_CHANNEL = 'VIEW_CHANNEL'
expost const VIEW_CHANNELS = 'VIEW_CHANNELS'

export const VisibleScene = {
  SHOW_CHANNEL: 'SHOW_CHANNEL',
  SHOW_CHANNELS: 'SHOW_CHANNELS'
}

export const viewChannel = (url) => {
  return {
    type: 'VIEW_CHANNEL',
    dataSet: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(['']),
    loading: true,
    url
  }
}

export const viewChannels = (url) => {
  return {
    type: 'VIEW_CHANNELS',
    dataSet: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(['']),
    loading: true,
    url
  }
}

// Get channel names and endpoints
export const viewChannels = (url) => {
        fetch('http://apis.is/tv/')
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

export const viewChannelSchedule = (url) => {
        fetch(url)
        .then((response) => { return response.json() })
        .then((responseData) => {
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