/**
 * 
 */
const Appointments = require('../models/appointments');
var moment = require('moment')

var inicio = moment("2017-10-16T09:00:00Z");
var fin =   moment("2017-10-16T09:30:00Z");

	for(var i=0;i<=24;i++){
	
		var sampleApp = {
				"dateTimeI": inicio,
				"dateTimeF": fin,
				"petId": "59e0b4d717a15d0d3c58436a",
				"vetId": "v1",
				"status": "0"
			};
		
		inicio = moment(inicio).add(30,'m');
		fin = moment(fin).add(30,'m');
		
	    	testInsertApp();

	}

function testInsertApp() {
	const app = new Appointments(sampleApp);
	app.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testInsertApp", app);	
		}
	})
}