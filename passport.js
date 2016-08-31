'use strict';

const passport      = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      bcrypt        = require('bcryptjs'),
      db            = require('./models'),
      User          = db.User
      ;

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
        return done(null, false, {message : 'user password is incorrect'});
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, done){
  return done(null, user);
});
passport.deserializeUser(function(user, done){
  return done(null, user);
});

module.exports = passport;