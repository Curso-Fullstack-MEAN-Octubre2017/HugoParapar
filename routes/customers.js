
var express = require('express');

var Customer = require('../controller/customer.js');

var api = express.Router();

	//API
		api.route('/customers') 
		 .get(Customer.findAll)
		 .post(Customer.add);
		
		/*api.route('/customers/:id') 
		 .get(Customer.findById)
		 .put(Customer.update);*/
	

module.exports = api;