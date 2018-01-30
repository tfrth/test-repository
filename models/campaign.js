//campaign model

var mongoose = require('mongoose');


var CampaignSchema = new mongoose.Schema({
	campaign_id: Number
});

mongoose.model('Campaign', CampaignSchema);

