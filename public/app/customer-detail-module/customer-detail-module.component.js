'use strict';

var app= angular.module('customerDetailModule', []);

    app.component('customerDetailModule', {
        templateUrl:'/app/customer-detail-module/customer-detail-module.html',
        controller: function($scope, $http, $routeParams, $location) {
           
            var id = $routeParams.id;
            
            if(id!="new"){ 
            
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
            	$http.get('api/customers/'+id+'/pets/').then(function(res) {
            		$scope.petsList = res.data;						
            	});    
            }   	
            	
        	// PUT/POST   	
        	$scope.submit = function(form) {
        	
        		var data = {
                        firstName: $scope.firstName,
                        lastName: $scope.lastName,
                        dni: $scope.dni,
                        email: $scope.email,
                        phoneNumber: $scope.phoneNumber,
                        note: $scope.note,
        		};
        		
        		if(id!="new"){ //put
        			
        			$http.put("api/customers/"+id, data);
	        			/*   .then(
	     		       function(response){
	     		         // success callback
	     		       }, 
	     		       function(response){
	     		         // failure callback
	     		       }
	     		    );*/
        			
            	}else{ //post
            		
            		$http.post("api/customers/", data);
            		/*   .then(
            		       function(response){
            		         // success callback
            		       }, 
            		       function(response){
            		         // failure callback
            		       }
            		    );*/	
            	}	
              };	 

              
//Crear nueva mascota a través del id del dueño
              
              $( "#boton").click(function() {
            	  $location.url('/pets/new?idCustomer=' + id);
            	  $scope.$apply();
            	});
//¿¿¿¿¿¿¿¿¿¿¿¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡!!!!!!!!!!!!!!?????????????? 
            	 		
        }
    });