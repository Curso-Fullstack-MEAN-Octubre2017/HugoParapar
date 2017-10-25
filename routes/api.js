var express = require('express');
var CustomerController = require('../controller/customer.js');
var PetsController = require('../controller/pets.js');
var AppoinmentController = require('../controller/appointment.js');
var api = express.Router();

const successCallback = function(res) { return function(result) { res.json(result) }}
const failCallback = function(res){ return function(err) {
	console.error(err);
	res.sendStatus(500);
}};

//GET
api.get('/customers',CustomerController.getCustomers);
api.get('/customers/:id',CustomerController.getCustomerById);
api.get('/customers/:id/pets',PetsController.getPetsByCustomerId);
api.get('/pets/:id',PetsController.getPetsById);
api.get('/appointments',AppoinmentController.getApp);
	/*prueba promesa servidor y separacion de responsabilidades */
	//api.get('/appointments/:id',AppoinmentController.getAppById);
	api.get('/appointments/:id', function(req, res) { 
		AppoinmentController.getAppById(req.params.id)
			.then(successCallback(res),failCallback(res)); 
	});
	/*fin prueba*/
api.get('/appointments/:fromdate/:todate',AppoinmentController.getAppByDate);

//POST
api.post('/customers',CustomerController.postCustomer);
api.post('/pets',PetsController.postPets);
api.post('/appointments',AppoinmentController.postApp);

//PUT
api.put('/customers/:id',CustomerController.updateCustomer);
api.put('/pets/:id',PetsController.updatePet);
api.put('/appointments/:id',AppoinmentController.updateApp);

//DELETE
api.delete('/pets/:id',PetsController.deletePet);

module.exports = api;