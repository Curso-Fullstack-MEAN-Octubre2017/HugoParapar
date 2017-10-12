'use strict';

var app= angular.module('customerDetailModule', []);

    app.component('customerDetailModule', {
        templateUrl:'/app/customer-detail-module/customer-detail-module.html',
        controller: function($scope, $http, $routeParams) {
           
            var id = $routeParams.id;
            
            //Todos los datos del cliente
            	$http.get('api/customers/'+id).then(function(res) {
            		 $scope.firstName =  res.data.firstName;
            		 $scope.lastName =  res.data.lastName;
            		 $scope.dni =  res.data.dni;
            		 $scope.email =  res.data.email;
            		 $scope.phoneNumber =  res.data.phoneNumber;
            		 $scope.note =  res.data.note;
            	});
            
            //Mascotas del cliente
            	var petsList = this
            	$http.get('api/pets/'+id).then(function(res) {
            		$scope.petsList = res.data;
            										
            	});    
            	
            	
            // PUT
            	
            	
            	$scope.submit = function(form) {
            		
            	//
            		console.log($scope);
           
        			var data = {
                        firstName: $scope.firstName,
                        lastName: $scope.lastName,
                        dni: $scope.dni,
                        email: $scope.email,
                        phoneNumber: $scope.phoneNumber,
                        note: $scope.note
                    };
	            	
            			console.log('data_antes: ' + JSON.stringify(data));
            		
            		$http({
                        method: 'PUT',
                        url: "api/customers/" + id,
                        data: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).
                    success(function (data, status, headers, config) {
                    	console.log('OK');
                    	
                    	console.log('data: ' + JSON.stringify(data));
                    	
                    //    console.log('headers: ' + headers);
                     //  console.log('config: ' + JSON.stringify(config));
                    }).
                    error(function (data, status, headers, config) {
                   // console.log('data: ' + JSON.stringify(data));
                    	console.log('Error: ' + status);
                    //    console.log('headers: ' + headers);
                     //   console.log('config: ' + JSON.stringify(config));
                       
                    });
            		
            		
                  };
            	 		
        }
    });