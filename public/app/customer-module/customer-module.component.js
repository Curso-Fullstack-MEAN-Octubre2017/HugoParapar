'use strict'

//var mongoose = require('mongoose');
/*var Customer = require('../../../models/customers.js');*/

angular.module('customerModule', [])
    .component('customerModule', {
        templateUrl:'/app/customer-module/customer-module.html',
        controller: function($scope, $http) {
        	
        	
        	$scope.customerList = [];
        	
        	$http.get('api/customers').then(function(res) {
        		
        		console.log(res.data);
        		
        		
        		$scope.customerList = res.data;
        	});
  	
            console.log("Incializando customer-module")
        }
    });

    


/*
function customerController($scope, $http) { 
	 $scope.formData = {};
	 getClients();

	//Crear cliente
	 $scope.createCustomer = function(){
	 $http.post('/api/customers', $scope.formData)
	 .success(function(data) {
	 $scope.formData = {};
	 getClients();
	 })
	 .error(function(data) {
	 console.log('Error:' + data);
	 });
	 };

		*/ /*
	function getClients(){
	 $http.get('/api/customers')
	 .success(function(data) {
	 $scope.customers = data;
	 console.log(data)
	 })
	 .error(function(data) {
	 console.log('Error: ' + data);
	 }); 
	 };
	}
*/