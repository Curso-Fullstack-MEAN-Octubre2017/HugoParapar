'use strict';

angular.module('sampleModule', ['ngRoute'])
    .component('sampleModule', {
        templateUrl:'/app/sample-module/sample-module.html',
        controller: function($scope, $http) {
            console.log("Incializando sample-module")
        }
    });

    