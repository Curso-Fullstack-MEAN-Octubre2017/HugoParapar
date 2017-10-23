var mongoose = require('mongoose');
var App = require('../models/appointments.js');
var Customer = require('../models/customers.js');
var Pets = require('../models/pets.js');
var moment = require('moment');

function postApp(req,res){
	var app = new App(req.body);
		app.save((err,appStored) =>{
			if(err) return res.status(500).send({message: "Error al guardar la cita"});
			if(!appStored) return res.status(404).send({message: "No se registro la cita"});
			res.json(appStored);	
		});
}
    
function getApp(req,res){
	App.find({})
			.exec(function (err,apps) {
				if(err) return res.status(500).send({message: "Error"});
				res.json(apps);			
	});	
}
     
function getAppById(req,res){
	App.findById(req.params.id, (err,app) =>{
		if(err) return res.status(500).send({message: "Error"});
		res.json(app);			
	});
}

function updateApp(req,res){
	App.findByIdAndUpdate(req.params.id, req.body, (err,appUpdate) =>{
		if(err)res.status(500).send({message: "Error al actualizar la cita"});
		if(!appUpdate)res.status(404).send({message: "No se puede actualizar la cita"});
		res.json(appUpdate);			
	});
}

function getAppByDate(req,res){
	
	var dateStart = moment(req.params.fromdate,"YYYYMMDD");
	var dateEnd = moment( req.params.todate,"YYYYMMDD");

	App.find({dateTimeI:{$gte:dateStart,$lt: dateEnd},status:{$gt:-1}},(err, busqueda) => {
	        if (err) {
	            res.json({ success: false, message: err });
	        } else {
	          
	        	  var agrupar = busqueda.reduce(function (obj, item) { 
	  		            
	        		  var fecha = moment(item.dateTimeI).format('YYYY-MM-DD');
	        		  var horaI = moment(item.dateTimeI).utc().format('HH:mm');
	        		  
	        		  if(obj[fecha] == null ){ 
	        			  obj[fecha] = {};
	        		  }
	        		  if(obj[fecha][horaI] == null ){
	        			  obj[fecha][horaI] = item ;
	        		  }
	        		  
	  		          return obj;
	  		            
	  		      }, {});
	        	  res.json(agrupar);
	        }
		}).populate({
		            path: 'petId',
		            model: 'Pets',
		            select: 'name specie',
		            populate: {
		                path: 'customerId',
		                model: 'Customer',
		                select: 'firstName lastName'
		            }
		}).sort({ 'dateTimeI': 1 });
}

module.exports = {postApp, getApp, getAppById, updateApp, getAppByDate};