'use strict'

var app= angular.module('appointmentsModule', []);

app.component('appointmentsModule', {
        templateUrl:'/app/appointments/appointments-module.html',
        controller: function($scope, $routeParams, $location) {
        
    		var day = moment().startOf('day');
    		if($routeParams.day) day = moment($routeParams.day,"YYYYMMDD");
    		$scope.day = day;
    		
        	$scope.$on("appointments:showAppClick", (event,id) =>{
        		$scope.$broadcast("appointments:showApp", id);
        	});
        	
        	$scope.$on("appointment:crearAppNewClick", (event,datetime) =>{
        		$scope.$broadcast("appointment:crearAppNew", datetime);
        	});
        	
        	$scope.$on("appointment:appCambios", (event, datetime) => {
                $scope.$broadcast("appointments:loadAppointments", datetime);
            });
           
        }
});