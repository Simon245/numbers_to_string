var numToString = angular.module('numToString', ['ngRoute']);

numToString.config(function($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl : 'views/home.html',
      controller  : 'HomeController'
    });
});