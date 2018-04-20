var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//userSchema includes all the required and optional data needed to create a new user
//they need a userID, password, first name, and last name
//optionally they can include their home location and various class locations
var userSchema = new Schema({
	userID: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: {type: String, required:  true },
	home: { 
		type: [Number], 
		index: { type: '2dsphere', sparse: true}
	},
	classLocations: [{
		type: [Number], 
		index: { type: '2dsphere', sparse: true}
	}]
});
userSchema.index({loc: '2dsphere'});

//trainSchema is used to create a new train station
//the id of the station is required
//the station name and expected next arrival (taken from MBTA API) are
//also options
var trainSchema = new Schema({
	_id: { type: String, required:true },
	Station Name: { type: String },
	Expected Time: {type: String}
});