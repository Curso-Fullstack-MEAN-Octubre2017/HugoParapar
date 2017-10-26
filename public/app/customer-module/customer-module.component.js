'use strict'

var app= angular.module('customerModule', []);

app.component('customerModule', {
        templateUrl:'/app/customer-module/customer-module.html',
        controller: function($scope, $filter, customersService) {
        	
        	$scope.currentPage = 0;
        	$scope.pageSize = 5;
        	$scope.q = '';
        	$scope.customerList = [];
        	
        	$scope.getData = function () {
        	      return $filter('filter')($scope.customerList, $scope.q)
        	}
        	
        	$scope.customerList = customersService.query({});
        	
            $scope.numberOfPages=function(){
                return Math.ceil($scope.getData().length/$scope.pageSize);                
            }  
        }
    });

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});