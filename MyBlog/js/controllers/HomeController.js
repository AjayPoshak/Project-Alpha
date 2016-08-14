//controller.js
'use strict';
/**
 * Controller for landing page
 * retrieves the data from services
 * $scope : acts as glue between controller and view
 * $http : to make http calls to backend
 * $rootScope : Parent scope of all other scopes
 * blogServices : backend service to restful API calls
 */
app.controller('HomeController', function($scope, $http, $rootScope, blogServices){
	console.log("Inside Home Controller...");
	$http.get("Contents/content.json").success(function(data){
			console.log("Inside the json data...");
			$scope.content = data;
		});
		/**
		 * Clicking on read more at blog will call this function
		 * @param  {string} clickId [every click on read more link will generate a
		 *  unique id to identify the article]
		 */
	$scope.linkClick = function(clickId){
		$scope.id = clickId;
		$rootScope.pageId = $scope.id;
		console.log("Inside rootScope..."+$rootScope.pageId);
		localStorage.setItem("PageId",$rootScope.pageId);
	};
	blogServices.getBlogData()
		.then(function(response){
			console.log(response);
		});
});
