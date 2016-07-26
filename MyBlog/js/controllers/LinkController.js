"use strict";
app.controller('LinkController', function($scope, $http, $rootScope){
	$rootScope.pageId = localStorage.getItem("pageId");
	console.log("Inside Link Controller"+$rootScope.pageId);

	$http.get("Contents/content.json")
		.success(function(data){
			$scope.content = data;
		});
});
