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

function getCustomers2datos(req,res){
	
	Customer.find({}, (err,customers) =>{ /*firstName:1,lastName:1*/
		
		if(err) return res.status(500).send({message: "Error"});
		
		console.log(customers);
		
		res.send(200, customers);			
	});
	
}
       
function getCustomerById(req,res){
	
	Customer.findById(req.params.id, (err,customers) =>{
		
		if(err) return res.status(500).send({message: "Error"});
		res.send(200, customers);			
	});
	
}


module.exports = {postCustomer, getCustomers2datos, getCustomerById};