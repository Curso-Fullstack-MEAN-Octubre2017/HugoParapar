var mongoose = require('mongoose');
var Customer = require('../models/customers.js');

function postCustomer(req,res){
	var customer = new Customer(req.body);
		customer.save((err,customerStored) =>{
			if(err) return res.status(500).send({message: "Error al guardar el cliente"});
			if(!customerStored) return res.status(404).send({message: "No se registro el cliente"});
			res.status(200).send({customer: customerStored});	
		});
}

function getCustomers(req,res){
	Customer.find({})
			.select('lastName firstName dni')
			.exec(function (err,customers) {
				if(err) return res.status(500).send({message: "Error"});
				res.send(200, customers);			
	});	
}
       
function getCustomerById(req,res){
	Customer.findById(req.params.id, (err,customer) =>{
		if(err) return res.status(500).send({message: "Error"});
		res.send(200, customer);			
	});
}

function updateCustomer(req,res){
	Customer.findByIdAndUpdate(req.params.id, req.body, (err,customerUpdate) =>{
		if(err)res.status(500).send({message: "Error al actualizar el cliente"});
		if(!customerUpdate)res.status(404).send({message: "No se puede actualizar el cliente"});
		res.send(200, customerUpdate);			
	});
}

module.exports = {postCustomer, getCustomers, getCustomerById, updateCustomer};