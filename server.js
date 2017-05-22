var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var controller = require('./controllers');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('client/build'));
app.use(controller);

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});
