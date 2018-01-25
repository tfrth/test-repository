//campaigns.js

var mongoose = require('mongoose');
var Campaign = mongoose.model('Campaign');

exports.findAll = function(req, res){
	Campaign.find({},function(err, results) {
		return res.send(results);
	});
};

exports.findById = function() {};
exports.add = function() {};
exports.update = function() {};
exports.delete = function() {};