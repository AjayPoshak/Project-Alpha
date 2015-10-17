
var app = angular.module("MyBlog",['ngRoute']);
console.log("Inside app.js...");
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
      when('/index', {
        templateUrl: 'partials/blog-home.html',
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