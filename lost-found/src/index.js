import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers';

const store = createStore(reducers , applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter> 
  </Provider>,
  document.getElementById('root')
);