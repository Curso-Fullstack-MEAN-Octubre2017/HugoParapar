
var express = require('express');
var CustomerController = require('../controller/customer.js');
var PetsController = require('../controller/pets.js');
var api = express.Router();

//GET
api.get('/customers',CustomerController.getCustomers);
api.get('/customers/:id',CustomerController.getCustomerById);
api.get('/customers/:id/pets',PetsController.getPetsByCustomerId);
api.get('/pets/:id',PetsController.getPetsById);

//POST
api.post('/customers',CustomerController.postCustomer);
api.post('/pets',PetsController.postPets);

//PUT
api.put('/customers/:id',CustomerController.updateCustomer);
api.put('/pets/:id',PetsController.updatePets);



module.exports = api;