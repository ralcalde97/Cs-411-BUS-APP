// Create the headerCtrl module and controller. Note that it depends on $location service
var headerCtrl = angular.module('headerCtrl', ['authService']);
headerCtrl.controller('headerCtrl', function(Auth, $scope, $rootScope, $location) {


    // Sets the isActive value based on the current URL location
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $rootScope.testVariableLogin = 5
    $rootScope.loginMessage = "Login Status: Logged out.";

    if(Auth.isLoggedIn()) {
        $rootScope.loginMessage = "Login Status: Logged in."
        console.log('Success: user is logged in')
    } else {
        console.log('User is not logged in. Please log in.')
    }
});