'use strict'

angular.module('directives', []) 
.directive('labelInputFormGroup', function() { 
	return { 
		restrict : 'E', 
		replace : true, 
		scope: { 
			n: '@', 
			model: '=',
			disabled: '=',
			id: '@',
			label: '@', 
			}, 
			template : '<div class="input-field col {{n}}">'+
							'<input type="text" id="{{id}}"  class="validate" ng-model="model" ng-disabled="{{disabled}}">'+
							'<label class="active" for="{{id}}">{{label}}</label>'+
						'</div>' 
	}
}).directive('textAreaFormGroup', function() { 
	return { 
		restrict : 'E', 
		replace : true, 
		scope: { 
			n: '@', 
			model: '=',
			disabled: '=',
			id: '@',
			label: '@', 
			}, 
			template : '<div class="input-field col {{n}}">'+
							'<textarea id="{{id}}"  class="materialize-textarea" ng-model="model" ng-disabled="{{disabled}}">'+
							'<label class="active" for="{{id}}">{{label}}</label>'+
						'</div>' 
	}
}).directive('datePicker', function() { 
	return { 
		restrict : 'E', 
		replace : true, 
		scope: { 
			n: '@', 
			model: '=',
			disabled: '=',
			id: '@',
			label: '@', 
			}, 
			link: function() {
				$('.datepicker').pickadate({
				    selectMonths: true,
				    selectYears: 30,
				    today: 'Hoy',
				    monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
				    monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
				    weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
				    weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],
				    weekdaysLetter: [ 'D', 'L', 'M', 'X', 'J', 'V', 'S' ],
				    clear: '',
				    close: 'SELECCIONAR',
				    closeOnSelect: false,
				    format: 'dd mmm yyyy'
				});
			},
			template : '<div class="input-field col {{n}}">'+
							'<input type="text" id="{{id}}" class="datepicker" ng-model="model" ng-disabled="{{disabled}}">'+
							'<label class="active" for="{{id}}">{{label}}</label>'+
						'</div>' 
	}
});