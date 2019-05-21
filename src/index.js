import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {Provider} from 'react-redux';

import App from './App'

const rootReducer = combineReducers({
  form: formReducer
})
const store = createStore(rootReducer)

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
  )