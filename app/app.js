'use strict';

// Declare app level module which depends on views, and components
angular.module('myNewApp', [
  'myNewApp.maincontroller',
  'ngRoute'
]).config(function($locationProvider, $routeProvider){

  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/main'});
});
