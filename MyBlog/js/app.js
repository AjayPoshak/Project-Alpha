"use strict";
var app = angular.module('MyBlog',['ngRoute']);
/**
 * Router for the application
 * $routeProvider : Used for configuring routes
 */
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
      when('/index', {
        templateUrl: 'partials/main-page.html',
        controller: 'HomeController'
      }).
	  when('/link',{
		templateUrl: 'partials/full-link.html',
		controller: 'LinkController'
	  }).
      otherwise({
        redirectTo: '/index'
      });
}]);
