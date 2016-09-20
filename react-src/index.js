'use strict';

import React from 'react';
import ReactDOM from  'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

const Header = require('./components/header'),
      GetAll = require('./components/getall'),
      Add    = require('./components/add'),
      Edit   = require('./components/edit'),
      Signin = require('./components/sign_in'),
      Signup = require('./components/sign_up'),
      Counter = require('./components/counter')
      ;

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const counterReducer = require('./reducers/counter');
const store = createStore(counterReducer);


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Header}>
        <IndexRoute component={GetAll}></IndexRoute>
        <Route path="add" component={Add}></Route>
        <Route path="edit/:id" component={Edit}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route path ="/signup" component={Signup}></Route>
        <Route path ="/counter" component={Counter}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
)