'use strict';

var app= angular.module('customerDetailModule', []);

    app.component('customerDetailModule', {
        templateUrl:'/app/customer-detail-module/customer-detail-module.html',
        controller: function($scope, $routeParams, $location, customersService) {
           
            var id = $routeParams.id;
            
            if(id!="new"){ 
            	//Ocultar añadir mascota si es un nuevo usuario
            	$scope.put=true;

            	//Todos los datos del cliente
            	$scope.c = customersService.get({id: id});
            } 
            
        	// PUT/POST   	
        	$scope.submit = function(form) {
        	
        		//Prueba Validators
        		const validationErrors = Validators.validateCustomer($scope.c); 
        		if(validationErrors) return alert(JSON.stringify(validationErrors)); 

        		if(id!="new"){ //put
        			customersService.update({id: $scope.c._id}, $scope.c, 
        					(res) => {  $scope.$emit("message:success", {message: "Cliente con exito"}) 
        								Materialize.toast('Datos modificados correctamente', 4000); },  
        					(err) => { Materialize.toast('ERROR', 4000); });
            	}else{ //post
            		customersService.save({}, $scope.c, 
            				(res) => { return $location.url('/customers/' + res._id); },  
        					(err) => { Materialize.toast('ERROR', 4000); });
            	}	
              };
              
           
        }
    });