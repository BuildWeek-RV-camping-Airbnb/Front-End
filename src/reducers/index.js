import { combineReducers } from 'redux'
import locationsReducer from './locationsReducer'
import signinReducer from './signinReducer'

export default combineReducers({
  locationsReducer,
  signinReducer
})

