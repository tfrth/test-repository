//campaign model

var mongoose = require('mongoose');


var CampaignSchema = new mongoose.Schema({
	title: req.body.title,
	id: req.body.id
});

mongoose.model('Campaign', CampaignSchema);

