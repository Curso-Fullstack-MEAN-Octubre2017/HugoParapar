'use strict';

var app= angular.module('petDetailModule', []);

    app.component('petDetailModule', {
        templateUrl:'/app/pet-detail-module/pet-detail-module.html',
        controller: function($scope, $routeParams, $location, petsService) {
           
            var id = $routeParams.id;
            
            if(id!="new"){ 
            
            //Todos los datos de la mascota
            	petsService.get({id: id}).$promise.then(function(pet) {
        	      $scope.pet = pet;
        	      $scope.pet.birthDate =  moment($scope.pet.birthDate).format('DD MMM YYYY', 'es');
            	}); 
            }   	
            	
        	// PUT/POST   	
        	$scope.submit = function(form) {
        		
        		var data = {};
        		
        		if(id!="new"){ //Modificar datos de mascota
        			petsService.update({id: $scope.pet._id}, $scope.pet, 
        					(res) => {  $scope.$emit("message:success", {message: "Pets con exito"}) 
        								Materialize.toast('Datos modificados correctamente', 4000); },  
        					(err) => { Materialize.toast('ERROR', 4000); });
        			
            	}else{ //Crear mascota
            	    //Cuando es nuevo se pasa por parametro el ID del dueño. ¡¡Buscar otra forma!!      
            		$scope.pet.customerId = $routeParams.idCustomer; 	
            		
            		petsService.save({}, $scope.pet, 
            				(res) => { Materialize.toast('Mascota creada correctamente', 4000); return $location.url('/customers/' + res.customerId); },  
        					(err) => { Materialize.toast('ERROR', 4000); });
            	}
              };	 	 	 		
              
            // DELETE
              $scope.delete = function(form) {
            	  	
            	  petsService.delete({id: $scope.pet._id}, 
          				(res) => { Materialize.toast('Mascota borrada correctamente', 4000); return $location.url('/customers/' + res.customerId); },  
      					(err) => { Materialize.toast('ERROR', 4000); });
              };   
        }
    });