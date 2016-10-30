'use strict';
 
angular.module('App', [
 'ngRoute'
,'firebase'
,    'App.auth' 
,    'App.home' 
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);