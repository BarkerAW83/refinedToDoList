var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/refinedToDoList', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('toDoList DB connected!')
});

var toDoSchema = new mongoose.Schema({
  name: String,
  completed: {type: Boolean, default: false}
});

var Kitten = mongoose.model('Kitten', kittySchema);

module.exports.db = db;