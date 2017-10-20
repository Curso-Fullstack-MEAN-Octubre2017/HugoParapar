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
        	var before = moment(mes).add(1,'M').toDate();
        	
        	$scope.cells = []
        	
        	
        	var rellenar = mes.weekday();
        	for (var i=0; i < rellenar ; i++){
        		$scope.cells.push({});
        	}
        	
        	$http.get("api/appointments/"+mesI+"/"+$scope.n).then(function(res){
        		
        		$scope.app = res.data;
        		
        		
        		
        		for(var m = moment(mes); m.isBefore(before); m.add(1,'days')){
        			
        			var currentDate = m.format("DD");
        			var currentDate2 = m.format("YYYY-MM-DD");
        			

            		//console.log( $scope.app[currentDate2]);
        			
        			$scope.cells.push({
        				date: currentDate,
        				apps: $scope.app[currentDate2]
        			});
        			
        			
        			if ($scope.app[currentDate2]) {
        			   
		        		$scope.cells.push({
		        			appsCount: Object.keys($scope.app[currentDate2]).length
		        		});
        			}
        		}		

            	var dates = [];
                for (var i = 0; i < $scope.cells.length; i++ ) {
                    if (i % 7 == 0) dates.push([]);
                    dates[dates.length-1].push($scope.cells[i]);
                }
             
                //console.log($scope.cells)
                
                return $scope.dates = dates;
              
            
        	
          	});
        
        	
        	
        	
        	
        }
});

/*
app.directive('calendar', function() {
    // Requires that scope contains a 'monthDays' array.
    // Adds 'weeks' to scope.
    return {
        restrict: 'E',
        replace: true,
        template: '<table cellspacing="0" cellpadding="0">'
        + '<colgroup span="7"></colgroup>' 
        + '<tbody>' 
        + '<tr class="days">'
        + '<th scope="col" title="Lunes">Lunes</th>' 
        + '<th scope="col" title="Martes">Martes</th>' 
        + '<th scope="col" title="Miercoles">Miercoles</th>' 
        + '<th scope="col" title="Jueves">Jueves</th>' 
        + '<th scope="col" title="Viernes">Viernes</th>' 
        + '<th scope="col" title="Sábado">Sábado</th>' 
        + '<th scope="col" title="Domingo">Domingo</th>' 
        + '</tr>'
        + '<tr ng-repeat="week in weeks">'
        + '<td ng-repeat="day in week">{{day}}</td>'
        + '</tr></tbody></table>',
        link: function(scope) {
        	
        	
        	console.log(scope.cells.length);
        	
            scope.weeks = [];
            for (var i = 0; i < scope.cells.length; i++) {
                if (i % 7 == 0) scope.weeks.push([]);
                scope.weeks[scope.weeks.length-1].push(scope.cells[i]);
            }
        }
    }
})
*/

