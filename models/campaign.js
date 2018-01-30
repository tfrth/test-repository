//campaign model

var mongoose = require('mongoose');


var CampaignSchema = new mongoose.Schema({
	campaignID: Number,
	deviceID: Number
});

mongoose.model('Campaign', CampaignSchema);

