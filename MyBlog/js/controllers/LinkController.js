"use strict";
/**
 * This controller handles the next page which opens at link click
 * $scope : acts as glue between controller and view
 * $http : to make http calls to backend
 * $rootScope : the parent scope
 */
app.controller('LinkController', function($scope, $http, $rootScope, $routeParams, blogServices){
	console.log($routeParams.articleId);

/**
 * this http call will retrieve the detailed content of article
 */
	// $http.get("Contents/content.json")
	// 	.success(function(data){
	// 		$scope.content = data;
	// 	});
	blogServices.getArticlebyId($routeParams.articleId)
	.then(function(response){
		console.log(response);
		$scope.fullArticle = response.data[0];
	})
	.catch(function(err){
		console.log(err);
	});
});
