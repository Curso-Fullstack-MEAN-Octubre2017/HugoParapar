var mongoose = require('mongoose');
var App = require('../models/appointments.js');
var moment = require('moment');

function postApp(req,res){
	var app = new App(req.body);
		app.save((err,appStored) =>{
			if(err) return res.status(500).send({message: "Error al guardar la cita"});
			if(!appStored) return res.status(404).send({message: "No se registro la cita"});
			res.status(200).send({app: appStored});	
		});
}
    
function getApp(req,res){
	App.find({})
			.exec(function (err,apps) {
				if(err) return res.status(500).send({message: "Error"});
				res.send(200, apps);			
	});	
}
     
function getAppById(req,res){
	App.findById(req.params.id, (err,app) =>{
		if(err) return res.status(500).send({message: "Error"});
		res.send(200, app);			
	});
}

function updateApp(req,res){
	App.findByIdAndUpdate(req.params.id, req.body, (err,appUpdate) =>{
		if(err)res.status(500).send({message: "Error al actualizar la cita"});
		if(!appUpdate)res.status(404).send({message: "No se puede actualizar la cita"});
		res.send(200, appUpdate);			
	});
}

function getAppByDate(req,res){
	
	var from = req.params.fromdate; //20171001
		var dateStart = moment(from,"YYYYMMDD");
	var to = req.params.todate; //20171101
		var dateEnd = moment(to,"YYYYMMDD");

	 var busqueda = {};
	 busqueda['dateTime'] = {$gte: dateStart, $lte: dateEnd};
	
	App.find(busqueda).exec(function(err, fechas) {
	    if (err)return console.log('err',err);
	    console.log('fechas',fechas)
	     res.status(200).send(fechas);		
	})
	
}

module.exports = {postApp, getApp, getAppById, updateApp, getAppByDate};