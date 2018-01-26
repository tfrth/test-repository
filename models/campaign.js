//campaign model

var mongoose = require('mongoose');


var CampaignSchema = new mongoose.Schema({
	// title: String,
	// id: Number, 
	// beacon: String
	campaign: Object
});

mongoose.model('Campaign', CampaignSchema);

