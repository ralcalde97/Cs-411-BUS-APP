var mbtaCtrl = angular.module('mbtaCtrl', []);
mbtaCtrl.controller('mbtaCtrl', function($scope, $log, $http) {

    $scope.formData = {};

    //Initializing variables that are used in the function
    $scope.num = 0
    $scope.testVariable = 0
    $scope.arrivalTime = ""
    //List of all stops along BU's campus (inbound and outbound), along with ID # to be called by MBTA API
    $scope.stops=[{stopname: "Blandford St. Outbound", stopnum: "70149"},
    {stopname: "Blandford St. Inbound", stopnum: "70148"},
    {stopname: "BU East Outbound", stopnum: "70147"},
    {stopname: "BU East Inbound", stopnum: "70146"},
    {stopname: "BU Central Outbound", stopnum: "70145"},
    {stopname: "BU Central Inbound", stopnum: "70144"},
    {stopname: "BU West Outbound", stopnum: "70143"},
    {stopname: "BU West Inbound", stopnum: "70142"},
    {stopname: "St. Paul St. Outbound", stopnum: "70141"},
    {stopname: "St. Paul St. Inbound", stopnum: "70140"},
    {stopname: "Pleasant St. Outbound", stopnum: "70139"},
    {stopname: "Pleasant St. Inbound", stopnum: "70138"},
    {stopname: "Babcock St. Outbound", stopnum: "70137"},
    {stopname: "Babcock St. Inbound", stopnum: "70136"}]
    
    //one function that can be used for any stop
    $scope.stopData = function(val)  {
        //stop ID
        var num = $scope.SelectedStop.stopnum;
        queryBody = {
            stopID: num
        };

        //calls MBTA API through routes.js
        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                //proof that it called the API
                console.log(queryResults);
                $scope.arrivalTime = queryResults;
            })
        //triggers the "____ train will arrive at ____ time" phrase in html file
        $scope.testVariable = 5

    }

});
