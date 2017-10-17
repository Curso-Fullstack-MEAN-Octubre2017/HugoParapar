var mongoose = require('mongoose');
var App = require('../models/appointments.js');

function postAppointment(req,res){
	var app = new App(req.body);
		app.save((err,appStored) =>{
			if(err) return res.status(500).send({message: "Error al guardar la cita"});
			if(!appStored) return res.status(404).send({message: "No se registro la cita"});
			res.status(200).send({app: appStored});	
		});
}
    
function getAppoinments(req,res){
	App.find({})
			.exec(function (err,apps) {
				if(err) return res.status(500).send({message: "Error"});
				res.send(200, apps);			
	});	
}
     
function getAppoinmentById(req,res){
	App.findById(req.params.id, (err,app) =>{
		if(err) return res.status(500).send({message: "Error"});
		res.send(200, app);			
	});
}

function updateAppointment(req,res){
	App.findByIdAndUpdate(req.params.id, req.body, (err,appUpdate) =>{
		if(err)res.status(500).send({message: "Error al actualizar la cita"});
		if(!appUpdate)res.status(404).send({message: "No se puede actualizar la cita"});
		res.send(200, appUpdate);			
	});
}

module.exports = {postAppointment, getAppoinments, getAppoinmentById, updateAppointment};