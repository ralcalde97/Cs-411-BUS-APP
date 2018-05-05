// Brings mongoose into the project
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Creates a User Schema. This will be the basis of how user data is stored in the db
var UserSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    class: {type: String, required: true},
    location: {type: [Number], required: false}, // [Long, Lat]
    favoriteStops: {type: [Number]},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

// Sets the created_at parameter equal to the current time
UserSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

// Creates new module in mLab
module.exports = mongoose.model('student-user', UserSchema);
