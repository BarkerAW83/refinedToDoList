var db = require('../database/index.js').db;
var RefinedToDo = require('../database/index.js').RefinedToDo

db;

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

var toDoSave = function(req, res){

  RefinedToDo.create({task: req.body.params.newToDo})
    .then((results) => {
      res.status(200).send(results)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).send(error)
    })
}

var toDoToggle = function(req, res){
  
  RefinedToDo.findByIdAndUpdate(req.body.params.toggleID, {completed: req.body.params.boolean})
    .then((results) => {
      res.status(200).send(results)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).send(error)
    })


//console.log(req.body.params.toggleID)
}

module.exports.getAll = getAll;
module.exports.toDoSave = toDoSave;
module.exports.toDoToggle = toDoToggle;