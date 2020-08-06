import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import {Provider} from 'react-redux';

import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore } from 'redux'
import todoApp from './reducers'
const store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);