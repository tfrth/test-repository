//server.js

var express = require('express');
var bodyParser = require('body-parser');

mongoose = require('mongoose');
fs = require('fs');

mongoose.connect("mongodb://heroku_8zh7755s:2s77357b69arj7jpd6q3mudjij@ds129374.mlab.com:29374/heroku_8zh7755s").then(() => console.log('connection successful, yo')).catch((err) => console.error(err));

var app = express();

require('./models/campaign')

var routes = require('./routes')(app);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 5000)

// console.log('server running at http://localhost:3001/');

