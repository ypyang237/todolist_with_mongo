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
        success: true
      });
    })
    .catch(function(){
      res.send({
        success: false
      });
    });
  })

  .put(function(req, res){
    res.send({
      PUTsuccess : true
    });
  })

  .delete(function(req, res){
    res.send({
      DELETEsuccess : true
    });
  });

  module.exports = router;