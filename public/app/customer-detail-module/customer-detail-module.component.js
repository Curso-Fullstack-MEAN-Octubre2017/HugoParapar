'use strict';


var app= angular.module('customerDetailModule', []);

    app.component('customerDetailModule', {
        templateUrl:'/app/customer-detail-module/customer-detail-module.html',
        controller: function($scope, $http) {
            console.log("Inicializando customer-detail-module")
        }
    });

    