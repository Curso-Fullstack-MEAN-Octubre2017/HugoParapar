'use strict'

var app= angular.module('appDetailModule', []);

app.component('appDetailModule', {
        templateUrl:'/app/appointments/app-detail-module/app-detail-module.html',
        controller: function($scope, appsService) {
        	  
        	$scope.$on("appointments:showApp", (event,id) =>{

        		$scope.$parent.edit = true;
        		$scope.$parent.crear = false;
        		
        		appsService.getAppById(id).then(function(res) {
        			$scope.horaI = moment(res.dateTimeI).format("HH:mm"); /*.utc()*/
        			$scope.cambiar = moment(res.dateTimeI).format("YYYYMMDD"); 
            		$scope.horaF = moment(res.dateTimeF).format("HH:mm");
            		$scope.note = res.note;
            		$scope.pet = res.petId;
            	});	
        		
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
        			appsService.updateApp(id, data).then(
        				function(res) { $scope.$parent.edit = false; 
        								$scope.$emit("appointment:appCambios", $scope.cambiar); }, 
        				function(err) { console.error("Error: ", err); });
        		}
        	});
        }
});