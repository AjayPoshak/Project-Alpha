//Section.js
"use strict";
/**
 * Directives for header and footer
 */
app.directive('blogHeader', function()
{
	console.log("Inside Header directive ...");
	return{
		templateUrl : "partials/header.html",
		controller : ''
	};

});
app.directive('blogFooter', function()
{
	console.log("Inside Footer directive ...");
	return{
		templateUrl : "partials/footer.html",
		controller : ''
	};

});
