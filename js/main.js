var madLibs = angular.module('ngMadLibs', [])

madLibs.constant('VERSION', "1.1")
madLibs.run(function(VERSION, $rootScope) {
    $rootScope.version = VERSION;
})

madLibs.controller('madLibsController',function($scope){

    $scope.data = {};

    $scope.showMadlib = false;

    $scope.submit = function(){
        $scope.showMadlib = true;
        $scope.submitted = true;
        console.log("Submit clicked!");
        console.log($scope.mad);
    }

    $scope.reset = function(){
        $scope.mad = [];
        $scope.showMadLib = false;
        $scope.submitted = false;
        console.log("Reset clicked!");
        console.log($scope.mad);
    }
});