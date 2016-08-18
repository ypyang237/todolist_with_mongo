'use strict';
const db      = require('../models'),
      Task    = db.Task;


const TaskFunctions = function(){

  function getAll(){
    return Task.findAll();
  }

  function addTask(name, completed_at){
    return Task.create({
      name: name,
      completed_at: completed_at,
      done: false
    });
  }

  return {
    getAll : getAll,
    addTask: addTask
  };

};

module.exports = TaskFunctions();