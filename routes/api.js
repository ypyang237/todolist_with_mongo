'use strict';

const express = require('express'),
      router  = express.Router()
      ;

router.route('/')
  .get(function(req, res){
    res.send(
    {
      success : true
    });
  })

  .post(function(req, res){
    res.send(
    {
      POSTsuccess : true
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