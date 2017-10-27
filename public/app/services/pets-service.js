'use strict'

angular.module('petsService',[]).factory('petsService', function($resource){

	 return $resource('/api/pets/:id', {id: '@id'}, { 
		 update: { method:'PUT'}   
	 }) 
});