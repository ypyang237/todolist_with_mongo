'use strict';

const express = require('express'),
      router  = express.Router(),
      TaskFunctions = require('../lib/taskFunctions')
      ;

router.route('/')
  .get(function(req, res){
    TaskFunctions.getAll()
    .then(function(todos){
      res.send(
      {
        tasks : todos
      });
    });
  })

  .post(function(req, res){
    TaskFunctions.addTask(req.body.name, req.body.completed_at)
    .then(function(){
      res.send({
        success : true
      });
    })
    .catch(function(){
      res.send({
        success : false
      });
    });
  })

  .put(function(req, res){
    console.log(req.body.id);

    TaskFunctions.editTask(req.body.id, req.body.name, req.body.completed_at)
    .then(function(){
      res.send({
        PUTsuccess : true
      });
    })
    .catch(function(){
      res.send({
        success : false
      });
    });
  })

  .delete(function(req, res){
    console.log(req.body.id);
    TaskFunctions.deleteTask(req.body.id)
    .then(function(){
      res.send({
        DELETEsuccess : true
      });
    })
    .catch(function(){
      res.send({
        success : false
      });
    });
  });

  router.route('/toggle')
    .put(function(req, res){
      TaskFunctions.toggleTask(req.body.id, req.body.done)
      .then(function(){
        res.send({
          success : true
        });
      });
    });

  router.route('/id/:id')
    .get(function(req, res){
      TaskFunctions.searchById(req.params.id)
      .then(function(task){
        res.send({
          task : task
        });
      });


    });

  module.exports = router;