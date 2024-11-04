import { createStore } from 'redux'
import rootReducer from '../reducers/index'

const globalStore = createStore(rootReducer)
export default globalStore