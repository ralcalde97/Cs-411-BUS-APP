angular.module('authService', [])

.factory('Auth', function($http, AuthToken) {

    var authFactory = {};

    authFactory.isLoggedIn = function() {
        if(AuthToken.getToken()) {
            return true;
        }
        else {
            return false;
        }
    };

    authFactory.twitter = function(token) {
        AuthToken.setToken(token);
    };

    return authFactory;
})

.factory('AuthToken', function($window) {

    var authTokenFactory = {};

    authTokenFactory.setToken = function(token) {
        $window.localStorage.setItem('token', token);
    }
    authTokenFactory.getToken = function() {
        return $window.localStorage.getItem('token');
    }

    return authTokenFactory;
})