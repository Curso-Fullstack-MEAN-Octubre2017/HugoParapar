'use strict'

angular.module('directives', []) 
.directive('labelInputFormGroup', function() { 
	return { 
		restrict : 'E', 
		replace : true, 
		scope: { 
			n: '@', 
			model: '=',
			id: '@',
			label: '@', 
			}, 
			template : '<div class="input-field col {{n}}">'+
							'<input type="text" id="{{id}}" class="validate" ng-model="model">'+
							'<label class="active" for="{{id}}">{{label}}</label>'+
						'</div>' 
	}; 
})
