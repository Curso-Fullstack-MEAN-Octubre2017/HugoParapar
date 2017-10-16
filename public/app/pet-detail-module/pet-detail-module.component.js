'use strict';

var app= angular.module('petDetailModule', []);

    app.component('petDetailModule', {
        templateUrl:'/app/pet-detail-module/pet-detail-module.html',
        controller: function($scope, $http, $routeParams, $location) {
           
            var id = $routeParams.id;
            
            if(id!="new"){ 
            
            //Todos los datos de la mascota
            	$http.get('api/pets/'+id).then(function(res) {
            		 $scope.pet = res.data;
            		 $scope.pet.birthDate =  moment(res.data.birthDate).format('DD MMM YYYY', 'es');
            	});
            }   	
            	
        	// PUT/POST   	
        	$scope.submit = function(form) {
        		
        		var data = {};
        		
        		if(id!="new"){ //Modificar datos de mascota
        			data = $scope.pet;
        			$http.put("api/pets/"+id, data)
        				.then(
             		       function(response){return history.back();}, 
             		       function(response){console.log("Error: "+response);}
             		    );	
            	}else{ //Crear mascota
            	    //Cuando es nuevo se pasa por parametro el ID del dueño. ¡¡Buscar otra forma!!      
            		$scope.pet.customerId = $routeParams.idCustomer;            		
            		data = $scope.pet;
            		$http.post("api/pets/", data)
            			 .then(
	        		       function(response){console.log(response); return $location.url('/customers/' + response.data.pets.customerId);}, 
	        		       function(response){console.log(response);}
            		    );
            	}
              };	 	 	 		
              
            // DELETE
              $scope.delete = function(form) {
            	  $http.delete('api/pets/'+id)
            	  		 .then(
	        		       function(response){return $location.url('/customers/' + response.data.customerId);}, 
	        		       function(response){console.log("Error: "+response);}
           		    );
              }
        }
    });