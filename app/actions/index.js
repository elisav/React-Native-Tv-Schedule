export const SELECT_CHANNEL = 'VIEW_CHANNEL'
export const REQUEST_CHANNEL = 'REQUEST_CHANNEL'
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'

export const SELECT_CHANNELS = 'VIEW_CHANNELS'
export const REQUEST_CHANNELS = 'REQUEST_CHANNELS'
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'


export function selectChannels(url){
    return {
        type: SELECT_CHANNELS,
        url
    }
}

export function selectChannel(url){
    return {
        type: SELECT_CHANNEL,
        url
    }
}

function requestChannels(url) {
    return{
        type: REQUEST_CHANNELS,
        url
    }
}

function requestChannel(url) {
    return{
        type: REQUEST_CHANNEL,
        url
    }
}

function receiveChannels(url, json) {
    return {
        type: RECEIVE_CHANNELS,
        url,
        data: json.channels
    }
}

function receiveChannel(url, json) {
    return {
        type: RECEIVE_CHANNEL,
        url,
        data: json.results
    }
}

function fetchChannels(url) {
        return dispatch => {
            dispatch(viewChannels(url))
            return fetch(url)
                .then((response) => response.json())
                .then(json => dispatch(receiveChannels(url, json)))
        }
}

function fetchChannel(url) {
        return dispatch => {
            dispatch(viewChannels('http://apis.is' + url))
            return fetch('http://apis.is' + url)
                .then((response) => response.json())
                .then(json => dispatch(receiveChannel('http://apis.is' + url, json)))
        }
}