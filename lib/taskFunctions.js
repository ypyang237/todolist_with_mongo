'use strict';
const db      = require('../models'),
      Task    = db.Task;


const TaskFunctions = function(){

  function getAll(){
    return Task.findAll();
  }

  return {
    getAll : getAll
  };

};

module.exports = TaskFunctions();