'use strict';

var app= angular.module('petDetailModule', []);

    app.component('petDetailModule', {
        templateUrl:'/app/pet-detail-module/pet-detail-module.html',
        controller: function($scope, $http, $routeParams, $location) {
           
            var id = $routeParams.id;
            var idcustomerId = $routeParams.idCustomer;
              
            if(id!="new"){ 
            
            //Todos los datos de la mascota
            	$http.get('api/pets/'+id).then(function(res) {
            		 $scope.chipNumber =  res.data.chipNumber;
            		 $scope.name =  res.data.name;
            		 $scope.birthDate =  res.data.birthDate;
            		 $scope.species =  res.data.species;
            		 $scope.race =  res.data.race;
            		 $scope.description =  res.data.description;
            		 $scope.photoURl =  res.data.photoURl;
            		 $scope.customerId =  res.data.customerId;
            	});
            
           
            }   	
            	
            	// PUT/POST   	
            	$scope.submit = function(form) {
            	
            		
            		
            		var data = {
            				chipNumber: $scope.chipNumber,
            				name: $scope.name,
            				birthDate: $scope.birthDate,
            				species: $scope.species,
            				race: $scope.race,
            				description: $scope.description,
            				photoURl: $scope.photoURl,
            				customerId : idcustomerId,
	                    };
            		

            		if(id!="new"){ //put
            			
	            		$http({
	                        method: 'PUT',
	                        url: "api/pets/" + id,
	                        data: JSON.stringify(data),
	                        headers: {
	                            'Content-Type': 'application/json'
	                        }
	                    }).
	                    success(function (status) {
	                    	console.log('OK '+status);
	                    	/*history.back();*/
	                    }).
	                    error(function (status) {
	                    	console.log('Error: ' + status);;    
	                    });
	            	}else{ //post
	            		
	            		$http.post("api/pets/", data)
	            		  .then(
	            		       function(response){
	            		    	  $location.url('/customers/' + response.data.pets.customerId);   
	            		       }, 
	            		       function(response){
	            		         // failure callback
	            		       }
	            		    );
	            		
	            	}
            		
                  };	 	
                  
                  
                 
                
            	 		
        }
    });