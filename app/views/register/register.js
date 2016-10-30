'use strict';

angular.module('App.register',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/register', {
		templateUrl: 'views/register/register.html'
		, controller: 'RegisterCtrl'
	});
}])

.controller('RegisterCtrl', ['$scope', function($scope){
	$scope.user = {email:'hansell.ramos@gmail.com', password:''};
	$scope.SignUp = function(event){
		//event.preventDefault();
	}
}])
;