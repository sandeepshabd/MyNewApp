'user strict';

describe("Unit test:Testing Main controller", function(){
	var scope;
	var controller;


	beforeEach(module('myNewApp'));
	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		controller = $controller('MainController',{
			$scope:scope
		});
	}));


   describe("$scope.moduleTitle", function(){
   		it("validate $scope.moduleTitle to be ToDo list ", function(){
   			expect(scope.showModule).toBe(true);
   			expect(scope.planList.length).toBe(4);
   		});

   });


});