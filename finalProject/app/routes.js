// Dependencies
var mongoose        = require('mongoose');
var User            = require('./model.js');
var request = require('request');


// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all users in the db
    app.get('/users', function(req, res){

        // Uses Mongoose schema to run the search (empty conditions)
        var query = User.find({});
        query.exec(function(err, users){
            if(err) {
                res.send(err);
            } else {
                // If no errors are found, it responds with a JSON of all users
                res.json(users);
            }
        });
    });

    // POST Routes
    // --------------------------------------------------------
    // Provides method for saving new users in the db
    app.post('/users', function(req, res){

        // Creates a new User based on the Mongoose schema and the post bo.dy
        var newuser = new User(req.body);

        // New User is saved in the db.
        newuser.save(function(err){
            if(err)
                res.send(err);
            else
                // If no errors are found, it responds with a JSON of the new user
                res.json(req.body);
        });
    });

    app.post('/mbtaAPI', function(req, res){

        var stopID = req.body.stopID;
        var APIUrl = "https://api-v3.mbta.com/predictions?sort=arrival_time&filter%5Bstop%5D="+stopID+"&filter%5Broute%5D=Green-B&api_key=935579a3be304755b8dc9edce1db2887";

        request(APIUrl, function (err, response, body) {
            if(err){
              res.send(err);
            } else { 

                let mbta = JSON.parse(body)
              
              if(mbta.data == undefined || mbta.data.attributes == undefined){
                res.send("MBTA predictions are unavailable at this time");
              } else {

                //console.log(mbta.data[0].attributes.arrival_time);
                let arrival_BU_Central = mbta.data[0].attributes.arrival_time; 
                var sub = arrival_BU_Central.substring(11,16);
                
                let responseTime = sub;
                res.send(responseTime);
        
              }
            }
          });

        
    });

    // DELETE Routes (Dev Only)
    // --------------------------------------------------------
    // Delete a User off the Map based on objID
    app.delete('/users/:objID', function(req, res){
        var objID = req.params.objID;
        var update = req.body;

        User.findByIdAndRemove(objID, update, function(err, user){
            if(err)
                res.send(err);
            else
                res.json(req.body);
        });
    });
};
