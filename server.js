//server.js

var express = require('express');
mongoose = require('mongoose');
fs = require('fs');
bodyParser = require('body-parser');

//var mongoUri = 'mongodb://<dbuser>:<dbpassword>@ds143907.mlab.com:43907/campaign_test'

// mongoose.connect(mongoUri).then(() => console.log('connection successful'))
//   .catch((err) => console.error(err));;

// mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds143907.mlab.com:43907/campaign_test", { 
//     uri_decode_auth: true 
//     }.then(() => console.log('connection successful')).catch((err) => console.error(err)));

mongoose.connect("mongodb://heroku_8zh7755s:2s77357b69arj7jpd6q3mudjij@ds129374.mlab.com:29374/heroku_8zh7755s").then(() => console.log('connection successful, yo')).catch((err) => console.error(err));

 //mongoose.connect("mongodb://tyfrth:Sandman2666@ds143907.mlab.com:43907/campaign_test").then(() => console.log('connection successful')).catch((err) => console.error(err));

// mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds143907.mlab.com:43907/campaign_test',
//                  {user: 'tyfrth', pass: '@ds143907'},
//                ).then(() => console.log('connection successful')).catch((err) => console.error(err));
var app = express();

require('./models/campaign')

var routes = require('./routes')(app);


// var db = mongoose.connection;
// db.on('error', function () {
// 	throw new Error('unable to connect to database at ' + mongoUri);
// });	

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.listen(29374);
// console.log('server running at http://localhost:3001/');

