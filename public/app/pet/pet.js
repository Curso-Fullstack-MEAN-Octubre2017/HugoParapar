'use strict';

var app= angular.module('pet', []);

    app.component('pet', {
        templateUrl:'/app/pet/pet.html',
        controller: function($scope, $http, $routeParams, $location) {
           
        	var id = $routeParams.id;
        	$scope.petsList = [];
        	
        	$http.get('api/customers/'+id+'/pets/').then(function(res) {
        		$scope.petsList = res.data;						
        	});    
        }
    });