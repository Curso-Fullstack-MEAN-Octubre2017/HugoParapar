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
        		$scope.q = '';
        		$scope.customerList = [];
            	
        		$http.get('api/customers').then(function(res) {
        			$scope.customerList = res.data;
            	});

        		$scope.getData = function () {
          	      return $filter('filter')($scope.customerList, $scope.q)
        		}
        		
        		$scope.pets = function(id) {
        			$scope.app.customerId = id;
        			console.log("customerId seleccionado: "+id);
        			
        			var petsList = {};

                	$http.get('api/customers/'+id+'/pets/').then(function(res) {
                		$scope.petsList = res.data;		
                		console.log($scope.petsList);
                	});    
        		}

        		$scope.petsOnClick = function(id) {
        			$scope.app.petId = id;
        			console.log("petId seleccionado: "+id);
        		}

        		$scope.crear = function(f) {
        			
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/   
/********************** FALLO 2 HORAS MENOS | Añado 2 horas a mano **********************/
        			$scope.app.dateTimeI = moment(date).add(120,'m'); 
            		$scope.app.dateTimeF = moment(date).add(120+30,'m'); 
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/            		
       
        			console.log("Crear cita (data): ", $scope.app);

        			appsService.saveApp($scope.app).then(
            				function(res) {
            					$scope.app = res;
            					console.log("CITA CREADA!");
            					var day = moment($scope.app.dateTimeI).format("YYYYMMDD")
            					$location.path("/appointments/day/"+day);
            				}, function(err) {
            					console.log("Error: ", err);
            				});
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