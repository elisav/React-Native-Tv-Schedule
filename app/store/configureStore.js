import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import RootReducer from '../reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}