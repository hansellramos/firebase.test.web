'use strict';

angular.module('App.register',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/register', {
		templateUrl: 'views/register/register.html'
		, controller: 'RegisterCtrl'
	});
}])

.controller('RegisterCtrl', ['$scope', 'AuthService', function($scope, AuthService){
	$scope.user = {email:'', password:''};
	$scope.SignUp = function(event){
		if(!$scope.registerForm.$invalid){
			AuthService.register($scope.user)
			.then(function(user){
				console.log('Authentication successful');
				debugger;
		    })
		    .catch(function(error){
		    	debugger;
		    	if (error.code == 'auth/weak-password') {
		          	alert('The password is too weak.');
		        } else if (error.code == 'auth/email-already-in-use') {
		          	alert('The email already exists.');
		        } else {
	    			console.log("Error: "+error.message);
	    		}
		    });
		}
		//event.preventDefault();
	}
}])
;