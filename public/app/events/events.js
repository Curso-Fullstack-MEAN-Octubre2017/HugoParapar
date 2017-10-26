'use strict';

angular.module('events', []);

angular.module('events').component('events', {
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