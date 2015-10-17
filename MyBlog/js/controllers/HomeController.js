//controller.js
'use strict';
app.controller('HomeController', function($scope,$http, $rootScope){
	console.log("Inside Home Controller...");
	$http.get("Contents/content.json").success(function(data){
			console.log("Inside the json data...");		
			$scope.content = data;
		});
	$scope.linkClick = function(clickId){
		$scope.id = clickId;
		$rootScope.pageId = $scope.id;
		console.log("Inside rootScope..."+$rootScope.pageId);
		localStorage.setItem("PageId",$rootScope.pageId);
	};
});
