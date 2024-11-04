/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import reducer from './reducers'

// const globalStore = createStore(rootReducer)
const store = (initialState = {}) => createStore(reducer, compose(applyMiddleware(thunk)))
export default store