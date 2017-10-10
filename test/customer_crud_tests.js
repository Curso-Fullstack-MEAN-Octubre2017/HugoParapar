/**
 * 
 */
const Customer = require('../models/customer');

var sampleCustomer = {
		"dni": "rrrrrr",
		"firstName": "pedro",
		"lastName": "gonzalez",
		"phone": "r",
		"email": "pedro@gonzalez.com",
		"note": "drrr",
	};

function testInsertCustomer() {
	const customer = new Customer(sampleCustomer);
	customer.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testInsertCustomer", customer);
		}
	})
}

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
}

testInsertCustomer();
testSearchCustomers();