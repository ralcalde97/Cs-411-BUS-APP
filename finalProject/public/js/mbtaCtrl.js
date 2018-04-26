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
    $scope.blandfordInbound = function(testVariable){

        queryBody = {
            stopID: 70148
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                console.log(queryResults);
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "Blandford Street (Inbound)"
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
    $scope.bueastInbound = function(testVariable){

        queryBody = {
            stopID: 70146
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "BU East (Inbound)"
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
    $scope.bucentralInbound = function(testVariable){


        queryBody = {
            stopID: 70144
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "BU Central (Inbound)"
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
    $scope.buwestInbound = function(testVariable){

        queryBody = {
            stopID: 70142
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "BU West (Inbound)"
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
    $scope.stpaulstreetInbound = function(testVariable){

        queryBody = {
            stopID: 70140
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "St. Paul St. (Inbound)"
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
    $scope.pleasantstreetInbound = function(testVariable){

        queryBody = {
            stopID: 70138
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "Pleasant Street (Inbound)"
        $scope.testVariable = 5
        
    
    };

    $scope.babcockstreetOutbound = function(testVariable){

        queryBody = {
            stopID: 70137
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "Babcock Street (Outbound)"
        $scope.testVariable = 5
        
    
    };
    $scope.babcockstreetInbound = function(testVariable){

        queryBody = {
            stopID: 70136
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })

        $scope.newVariable = "Babcock Street (Inbound)"
        $scope.testVariable = 5
        
    
    };


});