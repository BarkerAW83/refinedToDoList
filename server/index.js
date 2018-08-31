const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const getAll = require('../helpers/index.js').getAll;
const toDoSave = require('../helpers/index.js').toDoSave;
const toDoToggle = require('../helpers/index.js').toDoToggle;
const toDoDelete = require('../helpers/index.js').toDoDelete;

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/../client/dist/')))

//app.get('/', (req, res) => res.send('reactBoiler is live!')) //Will prove server connects to client side

app.get('/todos', function(req, res){
  getAll(req, res);
})

app.post('/todos', function(req, res){
  toDoSave(req, res)
})

app.put('/todos', function(req, res){
  toDoToggle(req, res)
})

app.delete('/todos', function(req, res){
  toDoDelete(req, res)
})

//app.listen(3000, () => console.log('refined To-Do List server listening on port 3000')) // for local app use

var port = process.env.PORT || 3000;

// app.listen(port, () => console.log(`refined To-Do List server listening on port ${port}`)) // for deployment, needs work app use

app.listen(port, () => console.log('refined To-Do List server listening on heroku port')) // for deployment, needs work app use