'use strict';

angular.module('myNewApp.controller',[])
.controller('mainController',["$scope",function($scope){
	$scope.welcomeMessage = "HelloWorld";
}]);