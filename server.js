'use strict';

const express    = require('express'),
      bodyParser = require('body-parser'),
      app        = express(),
      api        = require('./routes/api'),
      PORT       = process.env.PORT || 3000,
      passport   = require('./passport'),
      session    = require('express-session')
      ;

app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  ;



app.use(session({
  secret : 'chocolate',
  resave : true,
  saveUninitialized : true,
}));

app
   .use(passport.initialize())
   .use(passport.session());

app.use('/api', api);

app.use(express.static(__dirname + "/public"));

app.get('*', function(req, res){
  res.sendFile('./public/index.html',
    {
      root  : __dirname
    });
});

app.listen(PORT, function() {
  console.log(`Server listening on port: ${PORT}`);
});