var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/refinedToDoList', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('toDoList DB connected!')
});

var refinedToDoSchema = new mongoose.Schema({
  task: String,
  completed: {type: Boolean, unique: true, default: false}
});

var RefinedToDo = mongoose.model('RefinedToDo', refinedToDoSchema);

// var test = new RefinedToDo({ task: 'first task' });

// test.save(function (err, test) {
//   if (err) {
//     return console.error(err);
//   }
//   else{
//     console.log(test, ': HAS BEEN SAVED')
//   }
// });


module.exports.db = db;
module.exports.RefinedToDo = RefinedToDo;