//campaigns.js

var mongoose = require('mongoose');
var Campaign = mongoose.model('Campaign');

exports.findAll = function(req, res){
	Campaign.find({},function(err, results) {
		return res.send(results);
	});
};

exports.findById = function(req, res){
  var id = req.params.id;
  Campaign.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};

exports.add = function(req, res) {
	// Campaign.create(req.body, function (err, campaign){
	// 	if (err) return console.log(err);
	// 	return res.send(campaign);
	//  });

	var campaign_id = req.param('campaign_id');
	var device_id = req.param('device_id');
	
	var newCampaign = new Campaign({
		campaignID: campaign_id,
		deviceID: device_id
	});

// 	var campaign_data = {
// 	campaign_id: req.body.campaign_id
// };

// 	var newCampaign = new Campaign(campaign_data);
	//var newCampaign = new Campaign(req.body);
	newCampaign.save()
	.then(item => {
		res.send({
			"notification": {
   				"title": "Endpoint Test",
   				"message": "This is test: campaign endpoint push notification.",
   				"ignore_cooldown": true
 			}
		});
	})
	.catch(err => {
		res.status(400).send("bummer, ok");
	});
};


exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Campaign.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d campaigns', numberAffected);
      res.send(202);
  });
}
exports.delete = function(req, res){
  var id = req.params.id;
  Campaign.remove({'_id':id},function(result) {
    return res.send(result);
  });
};
