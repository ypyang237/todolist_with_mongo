'use strict';

import React from 'react';
import ReactDOM from  'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

const Header = require('./components/header')
      ;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
    </Route>
  </Router>,
  document.getElementById('content')
  )