'use strict';

angular.module('myNewApp.maincontroller',['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
		templateUrl:"mainModule/Main.html",
		controller:"MainController"
  });
}])
	.controller('MainController',["$scope", function($scope){

		$scope.showModule = true;


		$scope.planList = [
         {planName:"Boat insurance",selected:false},
         {planName:"Health insurance",selected:false},
         {planName:"Car insurance",selected:false},
         {planName:"Bike insurance",selected:false}
		];


		$scope.planSelected = function(){
			for(var i=0;i < $scope.planList.length;i++){
				if($scope.planList[i].selected){
					console.log($scope.planList[i].planName);
				}

			}
		}

	}]);