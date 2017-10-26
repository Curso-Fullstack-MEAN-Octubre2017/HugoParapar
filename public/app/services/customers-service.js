'use strict'

angular.module('customersService',[]).factory('customersService', function($resource){

	 return $resource('/api/customers/:id', {id: '@id'}, { 
		 update: { method:'PUT'}   
	 }) 
});