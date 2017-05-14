import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import { Router, Route } from 'react-router';
import thunk from 'redux-thunk';
import App from './components/App';

const createHistory = require('history').createHashHistory;

const hashHistory = createHistory();

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))} >
    <Router history={hashHistory}>
      <Route path={'/'} component={App} />
    </Router>
  </Provider>
  , document.getElementById('app'));
