'use strict';

angular.module('myNewApp.controller',[])
.controller('mainController',["$scope",function($scope){
	$scope.taskList = [
	{taskname:"Shopping", statusDone:false},
	{taskname:"Studying", statusDone:false},
	{taskname:"Booking ticket", statusDone:false}
	];
}]);