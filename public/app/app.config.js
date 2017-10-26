'use strict'

angular.module('petStore')
    .factory('loadingInterceptor', function($rootScope) {
		var interceptor = {
			'request': function(config) {
				console.log("resquest", config.method, config.url);
				$rootScope.$broadcast("http:request", config);
				return config;
			},
			'response': function(response) {
				console.log("response", response.status, response.statusText);
				$rootScope.$broadcast("http:response", response);
				return response;
			},
			'requestError': function(rejection) {
				console.log("requestError", rejection);
				$rootScope.$broadcast("http:requestError", rejection);
				return rejection;
			},
			'responseError': function(rejection) {
				console.log("responseError", rejection);
				$rootScope.$broadcast("http:responseError", rejection);
				return rejection;
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
                template: "<apps-day-module></apps-day-module>"
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