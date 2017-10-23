'use strict'

var app= angular.module('appDetailModule', []);

app.component('appDetailModule', {
        templateUrl:'/app/app-detail-module/app-detail-module.html',
        controller: function($scope, $http, $routeParams, appsService) {
        	
        	
        	$scope.appointment = {};
        	var id = $routeParams.id;
        	if(id) {
        		appsService.getAppById(id).then(function(res) {
            		$scope.app = res;
            	});
        	}
        	
   
        	
        }
});