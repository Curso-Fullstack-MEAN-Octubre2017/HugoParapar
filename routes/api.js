
var express = require('express');
var CustomerController = require('../controller/customer.js');
var PetsController = require('../controller/pets.js');
var api = express.Router();

//GET
api.get('/customers',CustomerController.getCustomers);
api.get('/customers/:id',CustomerController.getCustomerById);
api.get('/customers/new',CustomerController.getCustomerById);
api.get('/pets/:id',PetsController.getPetsByCustomerId);

//POST
api.post('/customers',CustomerController.postCustomer);
api.post('/pets',PetsController.postPets);

//PUT
//api.put('/customers/:id',CustomerController.updateCustomer);


module.exports = api;