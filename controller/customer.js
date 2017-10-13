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
			.exec(function (err,customerStored) {
				if(err) return res.status(500).send({message: "Error"});
				res.send(200, customerStored);			
	});	
}
       
function getCustomerById(req,res){
	
	Customer.findById(req.params.id, (err,customerStored) =>{
		if(err) return res.status(500).send({message: "Error"});
		res.send(200, customerStored);			
	});
}

function updateCustomer(req,res){
	
	Customer.findById(req.params.id, (err,customers) =>{
		
		customers.dni = req.body.dni || customers.dni;
		customers.firstName  = req.body.firstName || customers.firstName;
		customers.lastName  = req.body.lastName || customers.lastName;
		customers.phoneNumber  = req.body.phoneNumber || customers.phoneNumber;
		customers.email  = req.body.email || customers.email;
    	customers.note  = req.body.note || customers.note;
    	
		customers.save((err, customerStored) => {
            if (err) {res.status(500).send({message: "Error"})}
            res.status(200).send(customerStored);
        });	
	});
}

module.exports = {postCustomer, getCustomers, getCustomerById, updateCustomer};