import { combineReducers } from 'redux'
import users from './users.reducer'
import matakuliah from './matakuliah.reducer'

const appReducer = combineReducers({
  users,
  matakuliah
})

const rootReducer = (state, action) => appReducer(state, action)
export default rootReducer