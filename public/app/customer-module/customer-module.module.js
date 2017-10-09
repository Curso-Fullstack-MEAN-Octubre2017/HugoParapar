'use strict';

angular.module('petStore', []); 

function customerController($scope, $http) { 
 $scope.formData = {};
 getClients();

//Crear cliente
 $scope.createCustomer = function(){
 $http.post('/api/customers', $scope.formData)
 .success(function(data) {
 $scope.formData = {};
 getClients();
 })
 .error(function(data) {
 console.log('Error:' + data);
 });
 };

 /*
//Borrar cliente
 $scope.deleteCustomer = function(id) {
 $http.delete('/api/customers/' + id)
 .success(function(data) {
 getClients();
 })
 .error(function(data) {
 console.log('Error:' + data);
 });
 };
*/
 
function getClients(){
 $http.get('/api/customers')
 .success(function(data) {
 $scope.customers = data;
 console.log(data)
 })
 .error(function(data) {
 console.log('Error: ' + data);
 }); 
 };
}