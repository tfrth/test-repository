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

	var campaign_id = req.param('campaign_id');
	var device_id = req.param('device_id');
	
	var newCampaign = new Campaign({
		campaign_id: campaign_id,
		device_id: device_id
	});

	
	//campaign response as notification to meridian
	newCampaign.save()
	.then(item => {
		res.send({
			"notification": {
   				"title": "Endpoint Test",
					 "message": "hello world - notification from custom endpoint.",
					 "path": "https://www.google.com",
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
