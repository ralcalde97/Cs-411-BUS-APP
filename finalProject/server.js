// Dependencies

var express         = require('express');
var mongoose        = require('mongoose');
var port            = process.env.PORT || 3001;
var database        = require('./app/config');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var app             = express();
var passport        = require('passport')
var social          = require('./app/passport')(app, passport);

// Express Configuration
mongoose.connect(database.mongolab.url);

// Logging and Parsing
app.use(express.static(__dirname + '/public'));                 
app.use('/bower_components',  express.static(__dirname + '/bower_components')); // Use BowerComponents
app.use(morgan('dev'));                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());

// Routes
require('./app/routes.js')(app);

// Listen
app.listen(port);
console.log('App listening on port ' + port);
