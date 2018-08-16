//campaign model

var mongoose = require('mongoose');


var CampaignSchema = new mongoose.Schema({
	campaign_id: String,
	device_id: String
});

module.exports = mongoose.model('Campaign', CampaignSchema);

