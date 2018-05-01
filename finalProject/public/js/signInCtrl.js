var signInCtrl = angular.module('signInCtrl', ['authService']);
signInCtrl.controller('signInCtrl', function(Auth, $scope, $http){


    // Functions
    // ----------------------------------------------------------------------------

    // Creates a new user based on the form fields

    if(Auth.isLoggedIn()) {
        console.log('Success: user is logged in')
    } else {
        console.log('User is not logged in. Please log in.')
    }

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
