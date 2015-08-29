
var app = angular.module("MyBlog",['ngRoute']);
console.log("Inside app.js...");
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
      when('/index', {
        templateUrl: 'partials/blog-home.html',
        controller: 'HomeController'
      }).
      otherwise({
        redirectTo: '/index'
      });
}]);