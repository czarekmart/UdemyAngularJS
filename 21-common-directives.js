var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;
    $scope.rules = '';

    $http.get('data/21-common-directives-data.json')
        .then(function(result) {
            console.log("then:", result);
            if ( result.status == 200) {
                $scope.rules = result.data;
            }
        })
        .catch(function(data) {
            console.log("status: " + data.status + ", statusText: " + data.statusText);
        });

    $scope.secretCode = 'cm';
    $scope.canShowMyName = function() {
        return $scope.handle === $scope.secretCode;
    }

}]);


