// Declares the initial angular module "meanMapApp". Module grabs other controllers and services.
var app = angular.module('meanMapApp', ['addCtrl', 'mbtaCtrl', 'busCtrl', 'headerCtrl', 'geolocation', 'gservice', 'ngRoute'])

    // Configures Angular routing -- showing the relevant view and controller when needed.
    .config(function($routeProvider){

        // Sign-Up Control Panel
        $routeProvider.when('/join', {
            controller: 'addCtrl',
            templateUrl: 'partials/addForm.html',

        // Find Teammates Control Panel
        }).when('/mbta', {
            controller: 'mbtaCtrl',
            templateUrl: 'partials/mbtaForm.html',

        // All else forward to the Sign-Up Control Panel
        }).when('/bus', {
            controller: 'busCtrl',
            templateUrl: 'partials/busForm.html',

        // All else forward to the Sign-Up Control Panel
        }).otherwise({redirectTo:'/join'})
    });
