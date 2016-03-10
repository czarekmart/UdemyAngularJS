var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/33-main.html',
            controller: 'mainController'
        })

        .when('/second', {
            templateUrl: 'pages/33-second.html',
            controller: 'secondController'
        })

        .when('/second/:num', {
            templateUrl: 'pages/33-second.html',
            controller: 'secondController'
        })

});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $log.log("Executing controller mainController");

    $scope.people = [
        {
            name: 'Johny Weir',
            street: '1265 NW Cherry Lane',
            city: 'Greenwaves',
            state: 'OR',
            zip: '97444',
        },
        {
            name: 'Sergei Kalapov',
            street: '2144 SW Main Court',
            city: 'Miami',
            state: 'FL',
            zip: '22222',
        },
        {
            name: 'Chen Lu',
            street: '7423 NW Third Street',
            city: 'Los Angeles',
            state: 'CA',
            zip: '66666',
        },
    ];

    $scope.formatAddress = function(person) {
        return person.street + ", " + person.city + ", " + person.state + " " + person.zip;
    }

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {



}]);

myApp.directive("searchResult", function() {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/search-result.html',
        //template: '<a href="#/" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St., New York, NY 11111</p></a>',
        replace: true,
        scope: {
            personObject: '=',
            personAddressFunction: '&',
        },
    }
});
