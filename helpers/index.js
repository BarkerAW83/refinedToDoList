var db = require('../database/index.js').db;
var RefinedToDo = require('../database/index.js').RefinedToDo

db;

var test = new RefinedToDo({ task: 'second task' });

// test.save(function (err, test) {
//   if (err) {
//     return console.error(err);
//   }
//   else{
//     console.log(test, ': HAS BEEN SAVED')
//   }
// });

var getAll = function(req, res){

RefinedToDo.find({})
  .then((results) => {
    res.status(200).send(results)
  })
  .catch((error) => {
    console.log(error)
    res.status(500).send(error)
  })

}

module.exports.getAll = getAll;