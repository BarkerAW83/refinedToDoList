//const user = require('../config.js').user; //only use for local, not deployment
//const dbToken = require('../config.js').dbToken; // only use for local, not deployment


var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/refinedToDoList', { useNewUrlParser: true }); //database for local use

//mongoose.connect(`mongodb://${user}:${dbToken}@ds137862.mlab.com:37862/barkeraw83refinedtodo`, { useNewUrlParser: true }); //database for local use

mongoose.connect(`mongodb://${process.env.dbUsername}:${process.env.dbPassword}@ds137862.mlab.com:37862/barkeraw83refinedtodo`, { useNewUrlParser: true }); //database for remote use



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('toDoList DB connected!')

});

var refinedToDoSchema = new mongoose.Schema({
  task: {type: String, unique: true},
  completed: {type: Boolean, default: false}
});

var RefinedToDo = mongoose.model('RefinedToDo', refinedToDoSchema);


module.exports.db = db;
module.exports.RefinedToDo = RefinedToDo;