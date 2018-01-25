//routes.js

module.exports = function(app) {
	var campaigns = require('./controllers/campaigns');
	app.get('/campaigns', campaigns.findAll);
	app.get('/campaigns/:id', campaigns.findById);
	app.post('/campaigns', campaigns.add);
	app.put('/campaigns/:id', campaigns.update);
	app.delete('/campaigns/:id', campaigns.delete);
}