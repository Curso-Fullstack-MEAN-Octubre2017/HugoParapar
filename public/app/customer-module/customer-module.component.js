'use strict'

var app= angular.module('customerModule', []);

app.component('customerModule', {
        templateUrl:'/app/customer-module/customer-module.html',
        controller: function($scope, $http, $filter) {
        	
        	//
    			console.log("Incializando customer-module")
        	//
    			
        	$scope.currentPage = 0;
        	$scope.pageSize = 5;
        	$scope.q = '';
        	
        	$scope.customerList = [];
        	
        	$scope.getData = function () {
        	      return $filter('filter')($scope.customerList, $scope.q)
        	}
        	
        	$http.get('api/customers').then(function(res) {
        		
        		console.log(res.data);
        		
        		
        		$scope.customerList = res.data;
        	});
  	
        	

            $scope.numberOfPages=function(){
                return Math.ceil($scope.getData().length/$scope.pageSize);                
            }
            
             
        }
    });


app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
