'use strict'

var app= angular.module('appointmentModule', []);

app.component('appointmentModule', {
        templateUrl:'/app/appointment-module/appointment-module.html',
        controller: function($scope, $http, $routeParams, $location, appsService) {
        	
        	var month = moment().startOf('month');

        	if($routeParams.month){
        		month = moment($routeParams.month,"YYYYMM");
        	}
        	
        	$scope.m = month.toDate();
        	$scope.p = moment(month).add(-1,'M').format("YYYYMM");
        	$scope.n = moment(month).add(1,'M').format("YYYYMM");
        	var monthF = moment(month).add(1,'M').toDate();
        	
        	$scope.cells = []
        	
        	var rellenar = month.weekday();
        	for (var i=0; i < rellenar ; i++){
        		$scope.cells.push({});
        	}
     
        	appsService.getMonthApps(month).then(function(res){
        		$scope.app = res;
        		
        		for(var m = moment(month); m.isBefore(monthF); m.add(1,'days')){
        			
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
        	
        	 $scope.abrir = (date) => {
                 $location.path("/appointments/day/" + moment(date).format('YYYYMMDD'))
        	 };
        	
        }
});