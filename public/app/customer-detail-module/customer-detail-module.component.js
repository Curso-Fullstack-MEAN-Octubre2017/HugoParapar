'use strict';

var app= angular.module('customerDetailModule', []);

    app.component('customerDetailModule', {
        templateUrl:'/app/customer-detail-module/customer-detail-module.html',
        controller: function($scope, $http,$routeParams) {
            console.log("Inicializando customer-detail-module")
            
            var id = $routeParams.id;
            
            //Todos los datos del cliente
            	var customerDetail = this
            
            	$http.get('api/customers/'+id).then(function(res) {
        		
            		$scope.customerDetail = res.data;
            	});
            
            //Mascotas del cliente
            	var petsList = this
            	
            	$http.get('api/pets/'+id).then(function(res) {
            		
            		$scope.petsList = res.data;
            		
            		/********************************************************************************************************************/
            										console.log($scope.petsList);
            		/********************************************************************************************************************/
            										
            	});    
        }
    });