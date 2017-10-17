var express = require('express');
var CustomerController = require('../controller/customer.js');
var PetsController = require('../controller/pets.js');
var AppoinmentController = require('../controller/appoinment.js');
var api = express.Router();

//GET
api.get('/customers',CustomerController.getCustomers);
api.get('/customers/:id',CustomerController.getCustomerById);
api.get('/customers/:id/pets',PetsController.getPetsByCustomerId);
api.get('/pets/:id',PetsController.getPetsById);
api.get('/appointments',AppoinmentController.getAppoinments);
api.get('/appointments/:id',AppoinmentController.getAppoinmentById);
api.get('/appointments/:fromdate/:todate',AppoinmentController.getAppoinmentByDate);

//POST
api.post('/customers',CustomerController.postCustomer);
api.post('/pets',PetsController.postPets);
api.post('/appointments',AppoinmentController.postAppointment);

//PUT
api.put('/customers/:id',CustomerController.updateCustomer);
api.put('/pets/:id',PetsController.updatePet);
api.put('/appointments/:id',AppoinmentController.updateAppointment);

//DELETE
api.delete('/pets/:id',PetsController.deletePet);

module.exports = api;