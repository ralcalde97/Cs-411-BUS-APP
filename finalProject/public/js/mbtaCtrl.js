var mbtaCtrl = angular.module('mbtaCtrl', []);
mbtaCtrl.controller('mbtaCtrl', function($scope, $log, $http) {

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};

    $scope.num = 0
    $scope.testVariable = 0
    $scope.arrivalTime = ""
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
    $scope.stopData = function(val)  {
        var num = $scope.SelectedStop.stopnum;
        queryBody = {
            stopID: num
        };

        $http.post('/mbtaAPI', queryBody)

            // Store the filtered results in queryResults
            .success(function(queryResults){
                console.log(queryResults);
                $scope.arrivalTime = queryResults;
            })
        $scope.testVariable = 5

    }

});
