const express    = require('express')
const app        = express()
const bodyParser = require('body-parser');
const database   = require('./database')
app.use(bodyParser.json())

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}
app.use(allowCrossDomain);

app.delete('/comments/:id', function (req, res) {
  const id = req.params.id;
  database.remove(id)
  res.sendStatus(200)
})

app.put('/comments/:id', function(req, res) {
    const comment = req.body.comment
    const id = req.params.id
    res.json(database.update(id, comment))
})

app.get('/comments', function (req, res) {
  res.json(database.list())
})

app.listen(3000, function () {
  console.log('Comments server listening on port 3000!')
})
