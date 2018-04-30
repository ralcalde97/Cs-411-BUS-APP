var busCtrl = angular.module('busCtrl', []);
busCtrl.controller('busCtrl', function($scope, $log, $http) {

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};

    $scope.testVariable = 0
    $scope.newVariable = "Please click on a stop"
    $scope.arrivalTime = ""

    // Blandford Street API calls

    $scope.stop4149154 = function(testVariable){

    	queryBody = {
            stopID: "4149154"
        };

        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                businfoJSON = queryResults;
            })
            for i in businfoJSON:
            	console.log(i)
        

        $scope.newVariable = "Stop 4149154"
        $scope.testVariable = 5
    
    };

    $scope.stop4160738 = function(testVariable){

    	queryBody = {
            stopID: "4149154"
        };

        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                businfoJSON = queryResults;
            })
            for i in businfoJSON:
            	console.log(i)
        

        $scope.newVariable = "Stop 4160738"
        $scope.testVariable = 5
    
    };

});