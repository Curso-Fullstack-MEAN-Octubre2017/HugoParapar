'use strict'

var app= angular.module('appointmentsModule', []);

app.component('appointmentsModule', {
        templateUrl:'/app/appointments/appointments-module.html',
        controller: function($scope, $routeParams, $location) {
        
    		var day = moment().startOf('day');
    		if($routeParams.day) day = moment($routeParams.day,"YYYYMMDD");
    		$scope.day = day;
    		
    		console.log("Estoy entrando en el día:"+day);
    		
        	$scope.$on("appointments:showAppClick", (event,id) =>{
        		$scope.edit = true;
        		$scope.crear = false;
        		$scope.$broadcast("appointments:showApp", id);
        	});
        	
        	$scope.$on("appointment:crearAppNewClick", (event,datetime) =>{
        		$scope.crear = true;
        		$scope.edit = false;
        		$scope.$broadcast("appointment:crearAppNew", datetime);
        	});
        	
        	$scope.$on("appointment:appSaved", (event, datetime) => {
                $scope.$broadcast("appointments:loadAppointments", datetime);
            });
            
            /*$scope.$on("appointment:appDeleted", (event) => {
                $scope.$broadcast("appointments:loadAppointments");
            });*/
        }
});