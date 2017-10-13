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
            .otherwise({
                template: "Other"
            });
    });