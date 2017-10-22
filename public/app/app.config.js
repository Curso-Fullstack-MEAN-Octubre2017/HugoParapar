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
            .when("/appointments/:mes?",{
                template: "<appointment-module></appointment-module>"
            })
            .when("/appointments/day/:dia?",{
                template: "<apps-day-module></apps-day-module>"
            })
            .otherwise({
                template: "Other"
            });
    });