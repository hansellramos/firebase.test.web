'use strict';
 
angular.module('App.login', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
        templateUrl: 'views/login/login.html',
        controller: 'LoginCtrl'
    });
}])
 
.controller('LoginCtrl', ['$scope', 'AuthService', function($scope, AuthService) {
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