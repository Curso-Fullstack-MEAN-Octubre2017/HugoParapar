'use strict'

var app= angular.module('appDetailModule', []);

app.component('appDetailModule', {
        templateUrl:'/app/app-detail-module/app-detail-module.html',
        controller: function($scope, $routeParams, $http, $location, appsService) {
        	  
        	if($routeParams.id) {
        		appsService.getAppById($routeParams.id).then(function(res) {
        			
        			$scope.horaI = moment(res.dateTimeI).format("HH:mm"); /*.utc()*/
            		$scope.horaF = moment(res.dateTimeF).format("HH:mm");
            		$scope.note = res.note;
            		$scope.pet = res.petId;
            	
            		$scope.guardar = function() {
            			updateApp({note: $scope.note}); //Solo se pueden modificar las notas de la cita
            		}         		
            		$scope.cancelar = function() { //-1 (cancelada)
            			updateApp({status: -1});
            		}    
            		$scope.atender = function() { //FUNCIONALIDAD VETERINARIO NO IMPLEMENTADA
            			alert("Botón desactivado"); //Atender cita. Status 1 (en curso)
            		} 
            		
            		function updateApp(data) {
            			appsService.updateApp($routeParams.id, data).then(
            				function(res) { $location.path("/appointments/day/"+moment(res.data.dateTimeI).format("YYYYMMDD")); }, 
            				function(err) { console.error("Error: ", err); });
            		}
            	});	
        	}
        }
});