'use strict'

angular.module('appsService',[]).factory('appsService', function($http, $q){

	var service = {};
	
	service._appsMapByMonth = {};
	
	//Devuelve una promesa con el mapa de las CITAS de un MES
	service.getMonthApps = (month) => {
		var promesa = $q.defer();
        var mesI = moment(month).format('YYYYMMDD');
        var mesF = moment(month).add(1,'M').format('YYYYMMDD');

		//Si tenemos los datos los devuelve
		if(service._appsMapByMonth[mesI]) {
			console.log("Datos de cache");
			promesa.resolve(service._appsMapByMonth[mesI]);
			return promesa.promise;
		}
		//sino los consulta
		$http.get("/api/appointments/" + mesI + "/"+ mesF)
			.success(function(response) {
				console.log("Datos de consulta");
				service._appsMapByMonth[mesI] = response;
				promesa.resolve(service._appsMapByMonth[mesI]);
			})
			.error(function(response) {
				promesa.reject({status: response.status, message: 'TODO'});
			});
		return promesa.promise;
	}	
	
	//Devuelve una promesa con el mapa de CITAS de un DÍA
	service.getAppsForDate = (date)  => {
		var promesa = $q.defer();
		var month = moment(date);
		var monthKey = month.format('YYYYMMDD');
		var dateKey = moment(date).format('YYYY-MM-DD');
				
		//Si tenemos los datos los devuelve
		if(service._appsMapByMonth[monthKey]) {
			console.log("Datos de cache");
			promesa.resolve(service._appsMapByMonth[monthKey][dateKey]);
			return promesa.promise;
		}
		//sino los consulta
		service.getMonthApps(month).then(
			function() {
				console.log("Datos de consulta");
				promesa.resolve(service._appsMapByMonth[monthKey][dateKey]);
			},function(err) {
				promesa.reject(err)
			});
		return promesa.promise;
}
	
	//Devuelve en la CITA por ID, todos los datos de la mascota y del dueño
	service.getAppById = (id)  => {
		var promesa = $q.defer();
    	$http.get("/api/appointments/" + id)
    		.success( function(response) {
    			promesa.resolve(response);
	    	})
	    	.error(function(err) {
	    		promesa.reject(err)
			});
    	return promesa.promise;
}
	
	//Crear CITA
	service.saveApp = (data)  => {
		var promesa = $q.defer();	
		$http.post("api/appointments/", data)
		.success( function(app) {
			service._appsMapByMonth = {};
			promesa.resolve(app);
		})
		.error(function(err) {
			promesa.reject(err)
		});
		return promesa.promise;
	}
		
	service.updateApp = (id, data)  => {
		var promesa = $q.defer();	
		$http.put("api/appointments/"+id, data).then(
				function(app) {
					service._appsMapByMonth = {};
					promesa.resolve(app);
				}, function(err) {
					promesa.reject(err)
				});
		return promesa.promise;
	}
	
	
	return service;
});