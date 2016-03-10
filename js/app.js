$(function(){
    var x = $('.container');
    console.log(x);
});


var myApp = angular.module('myApp', []);


myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter) {

    console.log("Inside controller");
    $scope.name = 'Tony';

    /*
    $timeout(function() {
    //setTimeout(function(){
        console.log("timeout called")
        $scope.name = "Everybody";
    }, 2000);
    */

    var promise = $timeout(2000);
    console.log(promise);
    promise.then(function() {
        console.log("Promise delivered");
        $scope.name = "Cezar";
    }).catch(function(){
        console.log("Promise rejected");
    });

    $scope.fbname = '';
    $scope.lowerfbname = function() {
        return $filter('lowercase')($scope.fbname);
    }

}]);
