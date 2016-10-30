'use strict';
 
angular.module('App', [
 'ngRoute'
,'firebase'
,    'App.auth' 
,    'App.login' 
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/login'
    });
}]);