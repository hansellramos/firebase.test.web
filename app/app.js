'use strict';
 
angular.module('App', [
 'ngRoute'
,'firebase'
,    'App.auth' 
,    'App.login'
,    'App.register' 
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/login'
    });
}]);