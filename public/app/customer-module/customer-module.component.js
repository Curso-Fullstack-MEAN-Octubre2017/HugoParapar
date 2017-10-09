var mongoose = require('mongoose');
var Customer = require('../../../models/customers.js');

/*
angular.module('petStore')
    .component('petStore', {
        templateUrl:'/app/customer-module/customer-module.html',
        controller: function($scope, $http) {
        	*/
        	

        	//GET - Return all registers
        	exports.findAll = function(req, res) {
        	 Customer.find(function(err, clients) {
        	 if(err) return res.status(500).send(err.message);
        	 res.status(200).json(clients);
        	 });
        	};

        	//GET - Return a register with specified ID
        	exports.findById = function(req, res) {
        	 Customer.findById(req.params.id, function(err, client) {
        	 if(err) return res.status(500).send(err.message);
        	 res.status(200).json(client);
        	 });
        	};

        	//POST - Insert a new register
        	exports.add = function(req, res) {
        	 var client = new Customer({
        	 name: req.body.name
        	 });
        	 client.save(function(err, client) {
        	 if(err) return res.status(500).send(err.message);
        	 res.status(200).json(client);
        	 });
        	};

        	//PUT - Update a register already exists
        	exports.update = function(req, res) {
        	 Customer.findById(req.params.id, function(err, client) {
        	 var client = new Customer({
        	 name: req.body.name
        	 });
        	 client.save(function(err) {
        	 if(err) return res.status(500).send(err.message);
        	 res.status(200).json(client);
        	 });
        	 });
        	};
/*
        	//DELETE - Delete a register with specified ID
        	exports.delete = function(req, res) {
        	 Customer.findById(req.params.id, function(err, client) {
        	 client.remove(function(err) {
        	 if(err) return res.status(500).send(err.message);
        	 res.status(200).send();
        	 });
        	 });
        	};
        	*/
        	
    /*    	
        	
            console.log("Incializando sample-module")
        }
    });*/

    