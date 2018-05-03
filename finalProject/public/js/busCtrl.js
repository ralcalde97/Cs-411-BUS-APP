var busCtrl = angular.module('busCtrl', []);
busCtrl.controller('busCtrl', function($scope, $log, $http) {

    $scope.formData = {};

    //Initializes variables to be used in method
    $scope.num = 0
    $scope.testVariable = 0
    $scope.arrivalTime = ""
    
    //stores information of all the stop names along BU's campuses, along with their IDs to be called by API
    $scope.stops=[{stopname: "Student Village 2", stopnum: "4160714"},
    {stopname: "Amory St.", stopnum: "4114006"},
    {stopname: "St. Mary's St.", stopnum: "4149154"},
    {stopname: "Blandford St.", stopnum: "4068466"},
    {stopname: "Hotel Commonwealth", stopnum: "4068470"},
    {stopname: "Huntington Ave. (Outbound)", stopnum: "4110206"},
    {stopname: "710 Albany St.", stopnum: "4068482"},
    {stopname: "Huntington Ave. (Inbound)", stopnum: "4160718"},
    {stopname: "Danielsen Hall", stopnum: "4160722"},
    {stopname: "Myles Standish", stopnum: "4160726"},
    {stopname: "Silber Way", stopnum: "4160730"},
    {stopname: "Marsh Plaza", stopnum: "4160734"},
    {stopname: "College of Fine Arts", stopnum: "4160738"}]

    //one function that can be used to access stop data from BU BUS API
    $scope.stopData = function(val){
    	var num = $scope.SelectedStop.stopnum;
        queryBody = {
            stopID: num
        };
        
        //calls API through routes.js
        $http.post('/BusAPI', queryBody)

            .success(function(queryResults){
                $scope.arrivalTime = queryResults;
            })
        //triggers html page to display arrival times
        $scope.testVariable = 5
    
    };

});
