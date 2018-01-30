//campaign model

var mongoose = require('mongoose');


var CampaignSchema = new mongoose.Schema({
	title: String,
	id: Number
});

mongoose.model('Campaign', CampaignSchema);

