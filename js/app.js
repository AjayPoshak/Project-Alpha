"use strict";
var app = angular.module('MyBlog',['ngRoute']);
/**
 * Router for the application
 * $routeProvider : Used for configuring routes
 */
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
      when('/index', {
        templateUrl: 'partials/home-page.html',
        controller: 'HomeController'
      }).
	  when('/link/:articleId',{
		templateUrl: 'partials/full-link.html',
		controller: 'LinkController'
	  }).
      otherwise({
        redirectTo: '/index'
      });
}]);
