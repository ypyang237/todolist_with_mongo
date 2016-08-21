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

    return Task.update(
      {
        name : name,
        completed_at : completed_at,
      },
      {
        where : {
          id : id
        }
      }
    );
  }


  function deleteTask(id){

    return Task.destroy({
      where : {
        id : id
      }
    });

  }

  function searchById(id){

    return Task.findOne({
      where : {
        id : id
      }
    });
  }

  function toggleTask(id, status){

    return Task.update(
      {
        done : status
      },
      {
        where : {
          id : id
        }
      }
    );
  }

  return {
    getAll     : getAll,
    addTask    : addTask,
    editTask   : editTask,
    deleteTask : deleteTask,
    toggleTask : toggleTask,
    searchById : searchById
  };

};

module.exports = TaskFunctions();