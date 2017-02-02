import { combineReducers } from 'redux'

import {
  SELECT_CHANNEL, REQUEST_CHANNEL, RECEIVE_CHANNEL,
  SELECT_CHANNELS, REQUEST_CHANNELS, RECEIVE_CHANNELS
} from '../actions'

function selectedChannels(state = 'reactjs', action) {
    switch(action.type) {
        case SELECT_CHANNELS:
            return action.url
        default:
            return state
    }
}

function channel (state = {isFetching: false, items: []}, action) {
    switch(action.type) {
        case REQUEST_CHANNEL:
            return Object.assign({}, state, { isFetching: true })
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.data
            })
        default:
            return state
    }
}

function channels (state = {isFetching: false, items: []}, action) {
    switch(action.type) {
        case REQUEST_CHANNELS:
            return Object.assign({}, state, { isFetching: true })
        case RECEIVE_CHANNELS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.data
            })
        default:
            return state
    }
}

function display ( state = {}, action) {
    switch(action.type) {
        case RECEIVE_CHANNELS:
        case RECEIVE_CHANNEL:
        case REQUEST_CHANNELS:
            return Object.assign(
                {}, state, {
                [action.url]: channels(state[action.url], action)
            })
        case REQUEST_CHANNEL:
            return Object.assign(
                {}, state, {
                [action.url]: channel(state[action.url], action)
            })
        default:
            return state
    }
}

const RootReducer = combineReducers({
    display,
    selectedChannels
})

export default RootReducer