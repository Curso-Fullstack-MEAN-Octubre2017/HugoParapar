'use strict'

var app= angular.module('appNewModule', []);

app.component('appNewModule', {
        templateUrl:'/app/app-new-module/app-new-module.html',
        controller: function($scope, $http, $routeParams, $filter, $location, appsService) {
        	  
        	if($routeParams.datetime) {
        		
        		var date = moment($routeParams.datetime,"YYYYMMDDHHmm");
        		$scope.app = {};
        		$scope.app.horaI = moment(date).format("HH:mm");
        		$scope.app.horaF = moment(date).add(30,'m').format("HH:mm"); 
        		
        /***/		
        		$scope.q = '';
        		$scope.customerList = [];
            	
            	$scope.getData = function () {
            	      return $filter('filter')($scope.customerList, $scope.q)
            	}
        		
        		$http.get('api/customers').then(function(res) {
        			
        			$scope.customerList = res.data;
            		
            		console.log(res.data);
            	});
        /***/		
        		$scope.pets = function(id) {
        			$scope.app.customerId = id;
        			
        			console.log(id);
        			
        			var petsList = {};

                	$http.get('api/customers/'+id+'/pets/').then(function(res) {
                		$scope.petsList = res.data;		
                		console.log($scope.petsList);
                	});    
        		}
        		
        		$scope.petsOnClick = function(id) {
        			$scope.app.petId = id;
        			
        			console.log(id);
        		}
        		
        		$scope.crear = function(f) {
   
/********* FALLO 2 HORAS MENOS *********/ 			
        			$scope.app.dateTimeI = date;
            		$scope.app.dateTimeF = moment(date).add(30,'m'); 
/**/            		
        		
            		
            		var data = $scope.app;
        			console.log("Crear cita", data);
        			
        			
        			/*
        			$http.post("api/appointments/", data)
	       		     .then(
	       		       function(res){ 
	       		    	   console.log("CITA CREADA!!!");
	       		    	$scope.app = res;
    					var day = moment($scope.app.dateTimeI).format("YYYYMMDD")
    					return $location.path("/appointments/day/"+day);
	       		    	}, function(err){
	       		    		console.log("Error: "+err);
	       		    		}
	       		    );		
        			*/
        		}
        			
        		$scope.change = function() {
        			if($('#search').val() != ""){
        				$scope.hide = true;
        			}else{
        				$scope.hide = false;
        			}
        		}
        		
        		$scope.volver = function() {
        			history.back();
        		}
        		
        	}
        }
});