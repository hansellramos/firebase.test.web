'use strict';

angular.module('App.auth',[])
.factory('AuthService', ['$firebaseAuth', function($firebaseAuth){
	var firebaseAuthObject = $firebaseAuth();
	return {
		firebaseAuthObject: firebaseAuthObject
		, login: function(user){
			return firebaseAuthObject
					.$signInWithEmailAndPassword(user.email, user.password);
		}
		, logout: function(){
			firebaseAuthObject.$signOut();
		}
		, isLoggedIn: function(){
			return firebaseAuthObject.$getAuth();
		}
	};
}])
;
