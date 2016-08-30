'use strict';

const express    = require('express'),
      bodyParser = require('body-parser'),
      app        = express(),
      api        = require('./routes/api'),
      PORT       = process.env.PORT || 3000,
      passport   = require('passport'),
      session    = require('express-session'),
      db         = require('./models'),
      User       = db.User,
      bcrypt     = require('bcryptjs'),
      LocalStrategy = require('passport-local').Strategy
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

passport.use(new LocalStrategy(
  function(username, password, done){
    User.findAll({
      where : {
        username : username
      }
    })
    .then(function(user){
      console.log('user', user[0].dataValues.password);
      if(user.length === 0){
        return done(null, false, {message : 'user does not exist'});
      }
      if(bcrypt.compareSync(password, user[0].dataValues.password) === false){
        return done(null, false, {message : 'user does not exist'});
      }
      return done(null, user);
    });
  }));

passport.serializeUser(function(user, done){
  return done(null, user);
});
passport.deserializeUser(function(user, done){
  return done(null, user);
});

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