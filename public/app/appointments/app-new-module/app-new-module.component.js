'use strict'

var app= angular.module('appNewModule', []);

app.component('appNewModule', {
        templateUrl:'/app/appointments/app-new-module/app-new-module.html',
        controller: function($scope, $http, $filter, appsService, customersService) {
        	  
        	$scope.$on("appointment:crearAppNew", (event,datetime) =>{	
 
        		console.log(datetime);
        		
        		var date = moment(datetime,"YYYYMMDDHHmm");         /**/	console.log(date);
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
	            					console.log("CITA CREADA!");
	            					$scope.app = res;
	            					console.log(moment($scope.app.dateTimeI).format("YYYYMMDD"));
	            					$scope.$emit("appointment:appSaved", moment($scope.app.dateTimeI).format("YYYYMMDD"));
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
        		
        	});
        }
});