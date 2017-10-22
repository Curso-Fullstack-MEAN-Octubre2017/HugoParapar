'use strict'

var app= angular.module('appsDayModule', []);

app.component('appsDayModule', {
        templateUrl:'/app/apps-day-module/apps-day-module.html',
        controller: function($scope, $http, $routeParams) {
        	
        	var dia = moment().startOf('day');
        	if($routeParams.dia) dia = moment($routeParams.dia,"YYYYMMDD");
        	
        	console.log(dia);
        	
        	/*
        	 * 
        	 * Acceder a los datos descargados antes ¡¿?!
        	 * 
        	 */
        }
    });