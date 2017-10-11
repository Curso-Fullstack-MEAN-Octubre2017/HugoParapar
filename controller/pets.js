var mongoose = require('mongoose');
var Pets = require('../models/pets.js');

function postPets(req,res){
	
	var pets = new Pets();
	var params = req.body;
	
	pets.chipNumber = params.chipNumber;
	pets.name = params.name;
	pets.birthDate =  params.birthDate;
	pets.species = params.species;
	pets.race = params.race;
	pets.description =params.description;
	pets.photoURl = params.photoURl;
	pets.customerId =params.customerId;
	
	pets.save((err,petsStored) =>{
		
		if(err) return res.status(500).send({message: "Error al guardar el cliente"});
		if(!petsStored) return res.status(404).send({message: "No se registro el cliente"});
		res.status(200).send({pets: petsStored});	
	});
}

function getPetsByCustomerId(req,res){
	
	Pets.find({customerId: req.params.id})
		.select('name species photoURl')
		.exec(function (err,pets) {
			if(err) return res.status(500).send({message: "Error"});
			res.send(200, pets);			
	});
}


module.exports = {getPetsByCustomerId, postPets};