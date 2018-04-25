var mbtaCtrl = angular.module('mbtaCtrl', []);
mbtaCtrl.controller('mbtaCtrl', function($scope, $log, $http) {

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};

    $scope.testVariable = 0
    $scope.newVariable = "Please click on a stop"
    $scope.arrivalTime = ""

    $scope.blandfordOutbound = function(testVariable){

        queryBody = {
            stopID: 70149
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                console.log(queryResults);
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "Blandford Street (Outbound)"
        $scope.testVariable = 5
        
    
    };

    $scope.bueastOutbound = function(testVariable){

        queryBody = {
            stopID: 70147
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "BU East (Outbound)"
        $scope.testVariable = 5
        
    
    };

    $scope.bucentralOutbound = function(testVariable){


        queryBody = {
            stopID: 70145
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "BU Central (Outbound)"
        $scope.testVariable = 5
        
    
    };

    $scope.buwestOutbound = function(testVariable){

        queryBody = {
            stopID: 70143
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "BU West (Outbound)"
        $scope.testVariable = 5
        
    
    };

    $scope.stpaulstreetOutbound = function(testVariable){

        queryBody = {
            stopID: 70141
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "St. Paul St. (Outbound)"
        $scope.testVariable = 5
        
    
    };

    $scope.pleasantstreetOutbound = function(testVariable){

        queryBody = {
            stopID: 70139
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "Pleasant Street (Outbound)"
        $scope.testVariable = 5
        
    
    };

    $scope.babcockstreetOutbound = function(testVariable){

        queryBody = {
            stopID: 70141
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "Babcock Street (Outbound)"
        $scope.testVariable = 5
        
    
    };


});