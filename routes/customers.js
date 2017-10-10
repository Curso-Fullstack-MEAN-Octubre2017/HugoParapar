
var express = require('express');
var CustomerController = require('../controller/customer.js');
var api = express.Router();


api.get('/customers',CustomerController.getCustomers2datos);
api.post('/customers',CustomerController.postCustomer);


api.get('/customers/:id',CustomerController.getCustomerById);


//api.put('/customers/:id',CustomerController.updateCustomer);

module.exports = api;