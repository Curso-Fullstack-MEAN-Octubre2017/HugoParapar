'use strict';

angular.module('preloader', []);

angular.module('preloader').component('preloader', {
	 	templateUrl:'/app/events/preloader.html',
		controller: function($rootScope, $scope, $http) {

            $scope.loading = false;
            
            var onRequestStart = () => {
                $scope.loading = true;
            }
            var onRequestFinish = () => {
                $scope.loading = false;
            }

            $scope.$on('http:request', onRequestStart);
            $scope.$on('http:response', onRequestFinish);
            $scope.$on('http:requestError', onRequestFinish);
            $scope.$on('http:responseError', onRequestFinish);
            
            $rootScope.$on("message:success", function(event, message) {
            	alert(message.message);
            })
            
            $rootScope.$on("message:error", function(event, message) {
            	alert(message.message);
            })            
        }
});