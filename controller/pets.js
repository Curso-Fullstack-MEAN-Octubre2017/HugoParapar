var mongoose = require('mongoose');
var Pets = require('../models/pets.js');

function postPets(req,res){
	var pets = new Pets(req.body);
		pets.save((err,petsStored) =>{
			if(err) return res.status(500).send({message: "Error al guardar la mascota"});
			if(!petsStored) return res.status(404).send({message: "No se registro la mascota"});
			res.json(petsStored);	
		});
}

function getPetsByCustomerId(req,res){
	Pets.find({customerId: req.params.id})
		.select('name species photoURL')
		.exec(function (err,pets) {
			if(err) return res.status(500).send({message: "Error"});
			res.json(pets);			
	});
}

function getPetsById(req,res){
	Pets.findById(req.params.id, (err,pets) =>{
		if(err) return res.status(500).send({message: "Error"});
		res.json(pets);			
	});
}

function updatePet(req,res){
	Pets.findByIdAndUpdate(req.params.id, req.body, (err,petUpdate) =>{
		if(err)res.status(500).send({message: "Error al actualizar la mascota"});
		if(!petUpdate) res.status(404).send({message: "No se puede actualizar la mascota"});
		res.json(petUpdate);		
	});
}

function deletePet(req,res){
	Pets.findByIdAndRemove(req.params.id, (err,petDelete)  =>{
		if(err)res.status(500).send({message: "Error al borrar la mascota"});
		if(!petDelete) res.status(404).send({message: "No se puede borrar la mascota"});
		res.json(petDelete);
	});
}

module.exports = {postPets, getPetsByCustomerId, getPetsById, updatePet, deletePet};