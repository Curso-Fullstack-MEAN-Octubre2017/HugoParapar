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
            	
            	
            //put
       /*     	
            	$scope.modificarDatos = function () {
                   
            		console.log("modificar");
            		
            		var data = $.param({
                        firstName: $scope.firstName,
                        lastName: $scope.lastName
                    });
            	
            		console.log(data);
            		 
            		//$http.put('api/customers/'+id).then(function(res) { });  
            	        
            		  $http.put('/api/customers'+ data)
                      .success(function (data, status, headers) {
                          $scope.ServerResponse = data;
                      })
            		 
            		 
            	        
            	 };
            	
            	*/
            	
            	
            	
            	
            	
            	
        }
    });