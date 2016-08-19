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

  function editTask(id, name, completed_at){
    return Task.update({
      name : name,
      completed_at : completed_at,
    }, {
      where : {
        id : id
      }
    });
  }

  return {
    getAll   : getAll,
    addTask  : addTask,
    editTask : editTask
  };

};

module.exports = TaskFunctions();