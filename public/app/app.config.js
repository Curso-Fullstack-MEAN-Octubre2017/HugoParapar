'use strict'

angular.module('petStore')
    .factory('loadingInterceptor', function($rootScope, $q) {
		var interceptor = {
			'request': function(config) {
				$rootScope.$broadcast("http:request", config);
				return config;
			},
			'response': function(response) {
				$rootScope.$broadcast("http:response", response);
				return response;
			},
			'requestError': function(rejection) {
				$rootScope.$broadcast("http:requestError", rejection);
				return $q.reject(rejection);
			},
			'responseError': function(rejection) {
				$rootScope.$broadcast("http:responseError", rejection);
				return $q.reject(rejection);
			}
		};
		return interceptor;
    })
	.config(function(
	        $locationProvider,
	        $httpProvider,
	        $routeProvider
	){
        $locationProvider.html5Mode({ enabled: true });
        $httpProvider.interceptors.push('loadingInterceptor');
        $routeProvider
            .when("/",{
                template: ""
            })
            .when("/customers",{
                template: "<customer-module></customer-module>"
            })
            .when("/customers/:id",{
                template: "<customer-detail-module></customer-detail-module>"
            })
            .when("/pets/:id",{
                template: "<pet-detail-module></pet-detail-module>"
            })
            .when("/appointments/:month?",{
                template: "<appointment-module></appointment-module>"
            })
            .when("/appointments/day/:day?",{
                template: "<appointments></appointments>" /* <apps-day-module></apps-day-module> */
            })
             .when("/appointment/:id",{ 
            	 template: "<app-detail-module></app-detail-module>" 
            })
             .when("/appointment/new/:datetime",{ 
            	 template: "<app-new-module></app-new-module>" 
            })
            .otherwise({
                template: "Other"
            });
    });