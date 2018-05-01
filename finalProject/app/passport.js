var TwitterStrategy = require('passport-twitter').Strategy;
var User            = require('./model.js');
var session         = require('express-session');
var jsonconfig      = require('./jsonConfig.json');
var consumerTwitter = jsonconfig.twitterConsumer
var secretTwitter   = jsonconfig.twitterSecret

module.exports = function(app, passport) {

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true, cookie: {secure: false}}));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });


    passport.use(new TwitterStrategy({
        consumerKey: consumerTwitter,
        consumerSecret: secretTwitter,
        callbackURL: "http://localhost:3001/auth/twitter/callback"
      },
      function(token, tokenSecret, profile, done) {
          console.log(profile);
        // User.findOrCreate(..., function(err, user) {
        //   if (err) { return done(err); }
        //   done(null, user);
        // });
        done(null, profile);
      }
    ));

    app.get('/auth/twitter', passport.authenticate('twitter'));


    app.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect: '/#/mbta', failureRedirect: '/twittererror' }));

    return passport;

}