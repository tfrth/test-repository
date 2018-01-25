//server.js

var express = require('express');
var app = express(),
mongoose = require('mongoose'),
fs = require('fs');
bodyParser = require('body-parser');

var mongoUri = 'mongodb://localhost/campaign_test_endpoint'
mongoose.connect(mongoUri);

require('./models/campaign')

var routes = require('./routes')(app);


var db = mongoose.connection;
db.on('error', function () {
	throw new Error('unable to connect to database at ' + mongoUri);
});	

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.listen(3001);
console.log('server running at http://localhost:3001/');

