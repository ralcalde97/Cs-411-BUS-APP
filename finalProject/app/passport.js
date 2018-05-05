var TwitterStrategy = require('passport-twitter').Strategy;
var User            = require('./model.js');
var session         = require('express-session');
var jsonconfig      = require('./jsonConfig.json');
var jwt             = require('jsonwebtoken');
var secret          = 'harrypotter';
var consumerTwitter = jsonconfig.twitterConsumer
var secretTwitter   = jsonconfig.twitterSecret

// This pages sets up passport to handle 3rd party Auth with twitter

module.exports = function(app, passport) {

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true, cookie: {secure: false}}));

    passport.serializeUser(function(user, done) {
        token = jwt.sign({email: user.email}, secret, {expiresIn: '24h'});
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
        callbackURL: "http://localhost:3001/auth/twitter/callback",
        userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true"
      },
      function(token, tokenSecret, profile, done) {
          console.log(profile.emails[0].value);
          User.findOne({email: profile.emails[0].value}).select('email').exec(function (err, user) {

            if(err) done(err)

            if(user && user != null) {
              done(null, user);
              console.log('user exists')
            } else {

              var userData = {
                username: "N/A",
                email: profile.emails[0].value,
                password: "Twitter",
                class: "N/A",
                location: []
              };
              
            var newuser = new User(userData);

            // New User is saved in the db.
              newuser.save(function(err){
                if(err)
                  console.log(err)
                else
                // If no errors are found, it responds with a JSON of the new user
                console.log('user successfully saved')
              });
            }
          })
        done(null, profile);
      }
    ));

    // Twitter auth routes

    app.get('/auth/twitter', passport.authenticate('twitter'));


    app.get('/auth/twitter/callback', passport.authenticate('twitter', {failureRedirect: '/twittererror' }), function(req, res) {
      res.redirect('/#/twitter/' + token)
    });

    return passport;

}