"use strict";
/**
 * This controller handles the next page which opens at link click
 * $scope : acts as glue between controller and view
 * $http : to make http calls to backend
 * $rootScope : the parent scope
 */
app.controller('LinkController', function($scope, $http, $rootScope){
	$rootScope.pageId = localStorage.getItem("pageId");
	console.log("Inside Link Controller"+$rootScope.pageId);

/**
 * this http call will retrieve the detailed content of article
 */
	$http.get("Contents/content.json")
		.success(function(data){
			$scope.content = data;
		});
});
