'use strict';

import { combineReducers } from 'redux';

const Counter = require('./counter');
const List    = require('./list');

const Reducers = combineReducers({
  Counter,
  List
});

module.exports = Reducers;