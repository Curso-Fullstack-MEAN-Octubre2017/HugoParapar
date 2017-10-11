var mongoose = require('mongoose');
var Customer = require('../models/customers.js');

function postCustomer(req,res){
	
	var customer = new Customer();
	var params = req.body;
	
	customer.dni = params.dni;
	customer.firstName = params.firstName;
	customer.lastName =  params.lastName;
	customer.phoneNumber = params.phoneNumber;
	customer.email = params.email;
	customer.note =params.note;
	
	customer.save((err,customerStored) =>{
		
		if(err) return res.status(500).send({message: "Error al guardar el cliente"});
		if(!customerStored) return res.status(404).send({message: "No se registro el cliente"});
		res.status(200).send({customer: customerStored});	
	});
}

function getCustomers(req,res){
	
	Customer.find({})
			.select('lastName firstName')
			.exec(function (err,customers) {
				if(err) return res.status(500).send({message: "Error"});
				res.send(200, customers);			
	});	
}
       
function getCustomerById(req,res){
	
	Customer.findById(req.params.id, (err,customers) =>{
		if(err) return res.status(500).send({message: "Error"});
		res.send(200, customers);			
	});
	
}


module.exports = {postCustomer, getCustomers, getCustomerById};