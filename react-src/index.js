'use strict';

import React from 'react';
import ReactDOM from  'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

const Header = require('./components/header'),
      GetAll = require('./components/getall'),
      Add    = require('./components/add'),
      Edit   = require('./components/edit'),
      Signin = require('./components/sign_in'),
      Signup = require('./components/sign_up')
      ;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={GetAll}></IndexRoute>
      <Route path="add" component={Add}></Route>
      <Route path="edit/:id" component={Edit}></Route>
      <Route path="/signin" component={Signin}></Route>
      <Route path ="/signup" component={Signup}></Route>
    </Route>
  </Router>,
  document.getElementById('content')
)