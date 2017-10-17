/**
 * 
 */
const Appointments = require('../models/appointments');
var moment = require('moment')

var horasDia = moment("2017-10-01T09:00:00Z");

for(var i=0;i<=24;i++){

	var sampleApp = {
			"dateTime": horasDia,
			"petId": "59e0b4d717a15d0d3c58436a",
			"vetId": "v1",
			"status": "0"
		};
	
	horasDia = moment(horasDia).add(30,'m');
	
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

/*
function testSearchCustomers() {
	var search = {};
	var regexp = new RegExp("gonzalez", "i")
	search.firstName = regexp;
	search.lastName = regexp;
	console.log("Search customers:", search);
	
	Customer.find(search, (err, customers) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testSearchCustomers", customers);
		}
	}).sort({'_id' : -1});
}*/

/*testSearchCustomers();*/