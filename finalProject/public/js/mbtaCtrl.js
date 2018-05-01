var mbtaCtrl = angular.module('mbtaCtrl', []);
mbtaCtrl.controller('mbtaCtrl', function($scope, $log, $http) {

    

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};

    $scope.testVariable = 0
    $scope.newVariable = "Please click on a stop"
    $scope.arrivalTime = ""

    // Blandford Street API calls

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

    // BU East API calls

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

    // BU Central API calls

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

    // BU West API calls

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

    // St. Pual Street API calls

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

    // Pleasant Street API calls

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

    // Babcock Street API calls

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