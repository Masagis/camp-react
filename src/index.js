/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux'
// import globalStore from './redux/store'
import store from './store/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store()}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
