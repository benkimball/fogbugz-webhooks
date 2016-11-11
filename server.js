// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json

var calls = [];

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/calls", function (request, response) {
  response.send(calls);
});

app.post("/event", function (request, response) {
  calls.push(request.body);
  response.sendStatus(200);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});