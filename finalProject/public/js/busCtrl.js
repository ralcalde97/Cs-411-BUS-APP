var busCtrl = angular.module('busCtrl', []);
busCtrl.controller('busCtrl', function($scope, $log, $http) {

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};

    $scope.testVariable = 0
    $scope.stopName = "Please click on a stop"
    $scope.arrivalTime = ""

    // Bus Stop API calls

    $scope.stop4160714 = function(testVariable){

    	queryBody = {
            stopID: "4160714"
        };
        
        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
            

        $scope.stopName = "Student Village 2"
        $scope.testVariable = 5
    
    };

    $scope.stop4114006 = function(testVariable){

        queryBody = {
            stopID: "4114006"
        };
        
        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
            

        $scope.stopName = "Amory St."
        $scope.testVariable = 5
    
    };

    $scope.stop4149154 = function(testVariable){

        queryBody = {
            stopID: "4149154"
        };
        
        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
            

        $scope.stopName = "St. Mary's St."
        $scope.testVariable = 5
    
    };

    $scope.stop4068466 = function(testVariable){

        queryBody = {
            stopID: "4068466"
        };
        
        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
            

        $scope.stopName = "Blandford St."
        $scope.testVariable = 5
    
    };

    $scope.stop4068470 = function(testVariable){

        queryBody = {
            stopID: "4068470"
        };
        
        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
            

        $scope.stopName = "Hotel Commonwealth"
        $scope.testVariable = 5
    
    };

    $scope.stop4110206 = function(testVariable){

        queryBody = {
            stopID: "4110206"
        };
        
        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
            

        $scope.stopName = "Huntington Ave. (Outbound)"
        $scope.testVariable = 5
    
    };

    $scope.stop4068482 = function(testVariable){

        queryBody = {
            stopID: "4068482"
        };
        
        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
            

        $scope.stopName = "710 Albany St."
        $scope.testVariable = 5
    
    };

    $scope.stop4160718 = function(testVariable){

        queryBody = {
            stopID: "4160718"
        };
        
        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
            

        $scope.stopName = "Huntington Ave. (Inbound)"
        $scope.testVariable = 5
    
    };

    $scope.stop4160722 = function(testVariable){

        queryBody = {
            stopID: "4160722"
        };
        
        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
            

        $scope.stopName = "Danielsen Hall"
        $scope.testVariable = 5
    
    };

    $scope.stop4160726 = function(testVariable){

        queryBody = {
            stopID: "4160726"
        };
        
        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
            

        $scope.stopName = "Myles Standish"
        $scope.testVariable = 5
    
    };

    $scope.stop4160730 = function(testVariable){

        queryBody = {
            stopID: "4160730"
        };
        
        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
            

        $scope.stopName = "Silber Way"
        $scope.testVariable = 5
    
    };

    $scope.stop4160734 = function(testVariable){

        queryBody = {
            stopID: "4160734"
        };
        
        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
            

        $scope.stopName = "Marsh Plaza"
        $scope.testVariable = 5
    
    };

    $scope.stop4160738 = function(testVariable){

        queryBody = {
            stopID: "4160738"
        };
        
        $http.post('/BusAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
            

        $scope.stopName = "College of Fine Arts"
        $scope.testVariable = 5
    
    };

});