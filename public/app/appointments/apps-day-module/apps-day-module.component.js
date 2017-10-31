'use strict'

var app= angular.module('appsDayModule', []);

app.component('appsDayModule', {
        templateUrl:'/app/appointments/apps-day-module/apps-day-module.html',
        bindings: {day: "="},
        controller: function($scope, appsService) {

/******************************************************/
        	/* prueba de socketio */ 

        	var socket = io.connect(); 

        	socket.on('appointments:evento1', function(data) { 
        		console.log("Recibido el evento appointments:evento1", data); 

        		// realizar operaciones relacionadas con este evento 

        	});
/******************************************************/       	
        	
			var day = this.day;
			loadApps(day);
			
			$scope.$on("appointments:loadAppointments", (event, datetime) =>{	
				console.log("on appointments:loadAppointment", datetime);
				loadApps(datetime); /**/
			});
			
			
			function loadApps(day){
    
	    		$scope.listHourApps = [];
	
	            appsService.getAppsForDate(day).then(function(apps){
	            
	            	apps = apps || {};
	            
	                var abierto = moment(day).hour(9).utc();
	                var cerrado = moment(day).hour(21).utc();
	                for(var hour = moment(abierto); hour.isBefore(cerrado); hour.add(0.5, 'h')) {
	                    $scope.listHourApps.push({
	                        dateTime: hour.toDate(),
	                        app: apps[hour.format('HH:mm')]
	                    });
	                }          	
	            });  
			}
	            
            $scope.show = function(id) {
        		$scope.$emit("appointments:showAppClick",id);
    		}
        	
        	$scope.crear = function(datetime) {
        		$scope.$emit("appointment:crearAppNewClick",datetime);	
    		}
        }
});