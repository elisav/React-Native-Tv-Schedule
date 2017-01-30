function changeScene(state = initialState, action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

function displayShow(state = [], action) {
    switch(action.type) {
        case 'VIEW_CHANNEL':
            return Object.assign({}, state, {
                visibleScene: action.url
            })
        case 'VIEW_CHANNELS':
            return Object.assign({}, state, {
                visibleScene: action.url
            })
        default:
            return state
    }
}

export default displayShow