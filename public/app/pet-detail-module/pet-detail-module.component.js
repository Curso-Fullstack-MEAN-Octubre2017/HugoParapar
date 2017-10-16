'use strict';

var app= angular.module('petDetailModule', []);

    app.component('petDetailModule', {
        templateUrl:'/app/pet-detail-module/pet-detail-module.html',
        controller: function($scope, $http, $routeParams, $location) {
           
            var id = $routeParams.id;
            
            if(id!="new"){ 
            
            //Todos los datos de la mascota
            	$http.get('api/pets/'+id).then(function(res) {
            		 $scope.chipNumber =  res.data.chipNumber;
            		 $scope.name =  res.data.name;
            		 $scope.birthDate =  moment(res.data.birthDate).format('DD MMM YYYY', 'es');
            		 $scope.species =  res.data.species;
            		 $scope.race =  res.data.race;
            		 $scope.description =  res.data.description;
            		 $scope.photoURL =  res.data.photoURL;
            		 $scope.customerId =  res.data.customerId;
            	});
            }   	
            	
        	// PUT/POST   	
        	$scope.submit = function(form) {
        		
        		var data = {};
        		
        		if(id!="new"){ //Modificar datos de mascota
        			
        			data = {
            				chipNumber: $scope.chipNumber,
            				name: $scope.name,
            				birthDate: $scope.birthDate,
            				species: $scope.species,
            				race: $scope.race,
            				description: $scope.description,
            				photoURl: $scope.photoURl,	
                        };
        			
        			$http.put("api/pets/"+id, data);
        				/*.then(
	        		       function(response){return $location.url('/customers/' + *********idCustomer*********);}, 
	        		       function(response){console.log("Error: "+response);}
        				  );*/
        			
            	}else{ //Crear mascota
            		
            	     //Cuando es nuevo se pasa por parametro el ID del dueño. ¡¡Buscar otra forma!!      
                    //console.log("Id del dueño: "+ $routeParams.idCustomer);
                    
                    data = {
            				chipNumber: $scope.chipNumber,
            				name: $scope.name,
            				birthDate: $scope.birthDate,
            				species: $scope.species,
            				race: $scope.race,
            				description: $scope.description,
            				photoURl: $scope.photoURl,	
            				customerId: $routeParams.idCustomer
                        };
                    	
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