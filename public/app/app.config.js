'use strict'

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
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