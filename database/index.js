var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/refinedToDoList', { useNewUrlParser: true });

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