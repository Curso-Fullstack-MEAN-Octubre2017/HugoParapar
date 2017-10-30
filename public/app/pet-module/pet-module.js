'use strict';

var app= angular.module('petModule', []);

    app.component('petModule', {
        templateUrl:'/app/pet-module/pet-module.html',
        controller: function($scope, $http, $routeParams, $location) {
           
        	var id = $routeParams.id;
        	$scope.id = id;
        	$scope.petsList = [];
        	
        	$http.get('api/customers/'+id+'/pets/').then(function(res) {
        		$scope.petsList = res.data;						
        	});    
        }
    });