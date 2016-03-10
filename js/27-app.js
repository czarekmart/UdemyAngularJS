var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

});

var Singleton = (function() {

    var singletonObject = {};
    return {
        getInstance: function() {
            return singletonObject;
        }
    };
})();

var Factory = (function(){
    return {
        create: function(name) {
            return {
                Name: name,
                Year: Date.now(),
            };
        }
    }
})();

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.name = 'Main';

    var x = Singleton.getInstance();
    x.Mama = "Dana";
    $log.log(x);

    var y = Factory.create("Cezar");
    $log.log(y);

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {

    $scope.num = $routeParams.num || 100;
    var x = Singleton.getInstance();
    x.Tata = "Wladek";
    $log.log(x);

    var y = Factory.create("Gosia");
    $log.log(y);

}]);
