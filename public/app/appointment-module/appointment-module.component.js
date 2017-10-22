'use strict'

var app= angular.module('appointmentModule', []);

app.component('appointmentModule', {
        templateUrl:'/app/appointment-module/appointment-module.html',
        controller: function($scope, $http, $routeParams) {
        	
        	var mes = moment().startOf('month');

        	if($routeParams.mes){
        		mes = moment($routeParams.mes,"YYYYMM");
        	}
        	
        	$scope.m = mes.toDate();
        	$scope.p = moment(mes).add(-1,'M').format("YYYYMM");
        	$scope.n = moment(mes).add(1,'M').format("YYYYMM");
        	var mesI =  moment(mes.toDate()).format("YYYYMM");
        	var mesF = moment(mes).add(1,'M').toDate();
        	
        	$scope.cells = []
        	
        	var rellenar = mes.weekday();
        	for (var i=0; i < rellenar ; i++){
        		$scope.cells.push({});
        	}
        	
        	$http.get("api/appointments/"+mesI+"/"+$scope.n).then(function(res){
        		
        		$scope.app = res.data;
        		
        		for(var m = moment(mes); m.isBefore(mesF); m.add(1,'days')){
        			
        			var formatoDia = m.format("D");
        			var formatoLargo = m.format("YYYY-MM-DD");
        			
        			$scope.cells.push({
        				date: formatoDia,
        				apps: $scope.app[formatoLargo],
        				contador: $scope.app[formatoLargo] ? Object.keys($scope.app[formatoLargo]).length : 0
        			});
        		}		

            	var dates = [];
                
            	for (var i = 0; i < $scope.cells.length; i++ ) {
                    if (i % 7 == 0) dates.push([]);
                    dates[dates.length-1].push($scope.cells[i]);
                }
             
                return $scope.dates = dates;
          	});	
        }
});