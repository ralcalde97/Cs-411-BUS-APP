var mbtaCtrl = angular.module('mbtaCtrl', []);
mbtaCtrl.controller('mbtaCtrl', function($scope, $log, $http) {

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};

    $scope.num = 0
    $scope.testVariable = 0
    $scope.arrivalTime = ""
    $scope.stops=[{stopname: "Blandford St. Outbound", stopnum: "70149"},
    {stopname: "BU East Outbound", stopnum: "70147"},
    {stopname: "BU Central Outbound", stopnum: "70145"},
    {stopname: "BU West Outbound", stopnum: "70143"},
    {stopname: "St. Paul St. Outbound", stopnum: "70141"},
    {stopname: "Pleasant St. Outbound", stopnum: "70139"},
    {stopname: "Babcock St. Outbound", stopnum: "70137"}]
    $scope.stopData = function(val)  {
        if ($scope.num>0) {
            $scope.arrivalTime = ""
            location.reload();
        }
        if (val.stopname == "BU East Outbound") {
            num = 70147;
        } else {
            num = 70149;
        }
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
