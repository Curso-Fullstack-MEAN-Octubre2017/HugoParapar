var mongoose = require('mongoose');
var Pets = require('../models/pets.js');

function postPets(req,res){
	
	var pets = new Pets(req.body);
		pets.save((err,petsStored) =>{
			
			if(err) return res.status(500).send({message: "Error al guardar la mascota"});
			if(!petsStored) return res.status(404).send({message: "No se registro la mascota"});
			res.status(200).send({pets: petsStored});	
		});
}

function getPetsByCustomerId(req,res){
	
	Pets.find({customerId: req.params.id})
		.select('name species photoURl')
		.exec(function (err,petsStored) {
			if(err) return res.status(500).send({message: "Error"});
			res.send(200, petsStored);			
	});
}

function getPetsById(req,res){

	Pets.findById(req.params.id, (err,petsStored) =>{
		if(err) return res.status(500).send({message: "Error"});
		res.send(200, petsStored);			
	});
}

function updatePets(req,res){
	
	Pets.findById(req.params.id, (err,pets) =>{
		
		pets.chipNumber = req.body.chipNumber;
		pets.name = req.body.name;
		pets.birthDate =   req.body.birthDate;
		pets.species =  req.body.species;
		pets.race =  req.body.race;
		pets.description =  req.body.description;
		pets.photoURl =  req.body.photoURl;
		pets.customerId =  req.body.customerId;
		
		pets.save((err, petsStored) => {
            if (err) {res.status(500).send({message: "Error"})}
            res.status(200).send(petsStored);
        });	
	});
}

module.exports = {postPets, getPetsByCustomerId, getPetsById, updatePets};