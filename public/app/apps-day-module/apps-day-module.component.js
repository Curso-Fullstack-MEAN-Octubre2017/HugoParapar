'use strict'

var app= angular.module('appsDayModule', []);

app.component('appsDayModule', {
        templateUrl:'/app/apps-day-module/apps-day-module.html',
        controller: function($scope, $http, $routeParams, appsService) {
        	
        	var day = moment().startOf('day');
        	if($routeParams.day) day = moment($routeParams.day,"YYYYMMDD");
        	$scope.day = day;
        	
        	$scope.listHourApps = [];

            appsService.getAppsForDate(day).then(function(apps){
            
            	apps = apps || {};
            
                var abierto = moment(day).hour(9);
                var cerrado = moment(day).hour(21);
                for(var hour = moment(abierto); hour.isBefore(cerrado); hour.add(0.5, 'h')) {
                    $scope.listHourApps.push({
                        dateTime: hour.toDate(),
                        app: apps[hour.format('HH:mm')]
                    });
                }          	
            });  
        }
});