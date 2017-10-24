'use strict'

var app= angular.module('appDetailModule', []);

app.component('appDetailModule', {
        templateUrl:'/app/app-detail-module/app-detail-module.html',
        controller: function($scope, $http, $routeParams, appsService) {
        	  
        	if($routeParams.id) {
        		appsService.getAppById($routeParams.id).then(function(res) {
        			
        			var petId = res.petId._id;
            		$scope.horaI = moment(res.dateTimeI).utc().format("HH:mm");
            		$scope.horaF = moment(res.dateTimeF).utc().format("HH:mm");
            		$scope.note = res.note;
            		$scope.pet = res.petId;

            		$scope.guardar = function(f) {
            			/*
            			 * Guardar cambios cita. PUT
            			 */
            		}
            		
            		$scope.atender = function(f) {
            			/*
            			 * Atender cita. Status 1 (en curso)
            			 */
            		}          		
            		
            		$scope.cancelar = function(f) {
            			/*
            			 * Cancelar cita. Status -1 (cancelada)
            			 */
            		}    
            			
            	});	
        	}
        }
});