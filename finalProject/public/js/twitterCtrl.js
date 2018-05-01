var twitterCtrl = angular.module('twitterCtrl', ['authService', 'headerCtrl']);
twitterCtrl.controller('twitterCtrl', function($routeParams, $rootScope, Auth, $scope, $http){


    console.log($routeParams.token);
    Auth.twitter($routeParams.token);

    if(Auth.isLoggedIn()) {
        console.log('Success: user is logged in')
        $rootScope.loginMessage = "Login Status: Logged in."
    } else {
        console.log('User is not logged in. Please log in.')
    }

    
});