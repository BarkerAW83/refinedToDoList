const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, '/../client/dist/')))

//app.get('/', (req, res) => res.send('reactBoiler is live!')) //Will prove server connects to client side


app.listen(3000, () => console.log('reactBoiler server listening on port 3000'))