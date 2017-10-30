'use strict'

var app= angular.module('appointments', []);

app.component('appointments', {
        templateUrl:'/app/appointments/appointments.html',
        controller: function($scope, $routeParams, $location) {
        
    		var day = moment().startOf('day');
    		if($routeParams.day) day = moment($routeParams.day,"YYYYMMDD");
    		$scope.day = day;
    		
    		console.log("Estoy entrando en el día:"+day);
    		
        	$scope.$on("appointments:showAppClick", (event,id) =>{
        		$scope.edit = true;
        		$scope.crear = false;
        		$scope.$broadcast("appointments:showApp",id);
        	});
        	
        	$scope.$on("appointment:crearAppNewClick", (event,datetime) =>{
        		$scope.crear = true;
        		$scope.edit = false;
        		$scope.$broadcast("appointment:crearAppNew",datetime);
        	});
        	
        	$scope.$on("appointments:appSaved", (event, app) =>{
        		/**/
        		//$scope.$broadcast("appointments:addAppointment", data); 
        	});
        	
        	$scope.$on("appointments:appDeleted", (event) =>{
        		$scope.$broadcast("appointments:loadAppointment", day);
        	});
        }
});