import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectChannel, selectChannels, fetchChannels, fetchChannel } from '../actions'
import Channel from '../components/channel'
import Channels from '../components/channels'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedChannels } = this.props
    dispatch(fetchChannels(selectedChannels))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannels !== this.props.selectedChannels) {
      const { dispatch, selectedChannels } = nextProps
      dispatch(fetchChannels(selectedChannels))
    }
  }

  handleChange(nextChannel) {
    this.props.dispatch(selectChannels(nextChannel))
    this.props.dispatch(fetchChannels(nextChannel))
  }

  handleRefreshClick(e) {
    e.preventDefault()
    const { dispatch, selectedChannels } = this.props
    dispatch(fetchChannels(selectedChannels))
  }

  render() {
    const { selectedChannels, data, isFetching } = this.props
    return (
      <div>
        <Channel value={selectedChannels}
                onChange={this.handleChange}
                options={[ 'reactjs', 'frontend' ]} />
        <p>
          {!isFetching &&
            <a href='#'
               onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
        </p>
        {isFetching && data.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && data.length === 0 &&
          <h2>Empty.</h2>
        }
        {data.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Channels data={data} />
          </div>
        }
      </div>
    )
  }
}

App.propTypes = {
  selectedChannels: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
    const { selectedChannels, RootReducer } = state
    const {
        isFetching,
        items: posts
    } = display[selectedChannels] || {
        isFetching: true,
        items: []
    }

  return {
    selectedChannels,
    data,
    isFetching,
  }
}

export default connect(mapStateToProps)(App)