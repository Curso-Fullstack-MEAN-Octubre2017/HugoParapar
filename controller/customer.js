var mongoose = require('mongoose');
var Customer = require('../models/customers.js');
const Q = require("q");


function postCustomer(req,res){
	var customer = new Customer(req.body);
		customer.save((err,customerStored) =>{
			if(err) return res.status(500).send({message: "Error al guardar el cliente"});
			if(!customerStored) return res.status(404).send({message: "No se registro el cliente"});
			res.json(customerStored);	
		});
}

function getCustomers(req,res){
	Customer.find({})
			.select('lastName firstName dni')
			.exec(function (err,customers) {
				if(err) return res.status(500).send({message: "Error"});
				res.json(customers);			
	});	
}

//Prueba promesas en el servidor
function getCustomerById (id)  {
	var promesa = Q.defer();
	
	Customer.findById(id, function(err, customer) {
		if (err) {
			console.error(err);
			promesa.reject(err);
		} else {
			promesa.resolve(customer);
		}
	});
	
	return promesa.promise;
}


function updateCustomer(req,res){
	Customer.findByIdAndUpdate(req.params.id, req.body, (err,customerUpdate) =>{
		if(err)res.status(500).send({message: "Error al actualizar el cliente"});
		if(!customerUpdate)res.status(404).send({message: "No se puede actualizar el cliente"});
		res.json(customerUpdate);			
	});
}

module.exports = {postCustomer, getCustomers, getCustomerById, updateCustomer};