'use strict'

var app= angular.module('appNewModule', []);

app.component('appNewModule', {
        templateUrl:'/app/app-new-module/app-new-module.html',
        controller: function($scope, $http, $routeParams, $filter, $location, appsService, customersService) {
        	  
        	if($routeParams.datetime) {
        		
        		var date = moment($routeParams.datetime,"YYYYMMDDHHmm");
        		$scope.app = {};
        		$scope.app.horaI = moment(date).format("HH:mm");
        		$scope.app.horaF = moment(date).add(30,'m').format("HH:mm"); 
        		$scope.customerList = customersService.query({});
        		
        		$scope.getData = function () {
          	       return $filter('filter')($scope.customerList, $scope.q)
        		}
        		
        		$scope.pets = function(c) {
        			var customerId = c._id; 
        			$scope.app.customerId = customerId;
        			$scope.q = c.firstName+" "+c.lastName+" | "+c.dni;
        			var petsList = {};
                	$http.get('api/customers/'+customerId+'/pets/').then(function(res) {
                		$scope.petsList = res.data;		
                	});
        		}

        		$scope.petsOnClick = function(id) {
        			$scope.app.petId = id;
        			console.log("petId seleccionado: "+id);
        		}

        		$scope.crear = function(f) {
        			if($scope.app.customerId == null || $scope.app.petId==null){
        				 Materialize.toast('Seleccione una mascota antes de crear la cita', 2500)
        			}else{
	               		$scope.app.dateTimeI = moment(date)
	            		$scope.app.dateTimeF = moment(date).add(30,'m');
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
        		}
        			
        		$scope.change = function() {
        			if($('#search').val() != ""){
        				$scope.hide = true;
        			}else{
        				$scope.hide = false;
        			}
        		}
        		
        		$scope.clear = function () {
        			$scope.q = "";
        			/**/
         		}
        		
        		$scope.volver = function() {
        			history.back();
        		}
        		
        	}
        }
});