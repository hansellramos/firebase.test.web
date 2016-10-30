'use strict';
 
angular.module('App.home', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// Home controller
.controller('HomeCtrl', ['$scope', 'AuthService', function($scope, AuthService) {
	$scope.user = {email:'hansell.ramos@gmail.com', password:''};

	$scope.SignIn = function(event) {
		event.preventDefault();
	    // Auth Logic will be here
	    AuthService.login($scope.user)
	    .then(function(user){
    		console.log('Authentication successful');
	    })
	    .catch(function(error){
    		console.log("Error: "+error.message);
	    })
	}
}]);