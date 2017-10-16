'use strict';

var app= angular.module('customerDetailModule', []);

    app.component('customerDetailModule', {
        templateUrl:'/app/customer-detail-module/customer-detail-module.html',
        controller: function($scope, $http, $routeParams, $location) {
           
            var id = $routeParams.id;
            
            if(id!="new"){ 
            
            //Todos los datos del cliente
            	$http.get('api/customers/'+id).then(function(res) {
            		$scope.c = res.data;
            	});
            
            //Mascotas del cliente
            	var petsList = this
            	$http.get('api/customers/'+id+'/pets/').then(function(res) {
            		$scope.petsList = res.data;						
            	});    
            }   	

        	// PUT/POST   	
        	$scope.submit = function(form) {
        	
        		var data = $scope.c;

        		if(id!="new"){ //put
        			$http.put("api/customers/"+id, data);
            	}else{ //post
            		$http.post("api/customers/", data)
            		     .then(
            		       function(response){return $location.url('/customers/' + response.data.customer._id);}, 
            		       function(response){console.log("Error: "+response);}
            		    );	
            	}	
              };
              
            //Ocultar añadir mascota si es un nuevo usuario
              if(id=="new") $('.put').hide();

            //Crear nueva mascota a través del id del dueño
              
              $( "#boton").click(function() {
            	  $location.url('/pets/new?idCustomer=' + id);
            	  $scope.$apply();
            	});	 		
        }
    });