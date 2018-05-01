var signInCtrl = angular.module('signInCtrl', []);
signInCtrl.controller('signInCtrl', function($scope, $http){


    // Functions
    // ----------------------------------------------------------------------------

    // Creates a new user based on the form fields
    $scope.isUser = function() {

        // Grabs all of the text box fields
        var userData = {
            username: $scope.formData.username,
            password: $scope.formData.password,
        };

        // Saves the user data to the db
        $http.get('/users', userData)
            .success(function (data) {

                // Once complete, clear the form (except location)
                $scope.formData.username = "";
                $scope.formData.password = "";

            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    
});
