//Section.js
app.directive('blogHeader', function()
{
	console.log("Inside Header directive ...");
	return{
		templateUrl : "partials/header_new.html",
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
app.directive("blogMainpage", function(){
	console.log("Inside Main Page");
	return{
		templateUrl : "partials/main-page.html",
		controller:''
	}
});
app.directive("blogPolitics", function(){
	console.log("Inside Politics...");
	return{
		templateUrl : 'partials/politics.html',
		controller : ''
	}
});
app.directive("blogTech", function(){
	console.log("Inside Technology...");
	return{
		templateUrl : 'partials/tech.html',
		controller : ''
	}
});
app.directive("blogPersonal", function(){
	console.log("Inside Personal...");
	return{
		templateUrl : 'partials/personal.html',
		controller : ''
	}
});
app.directive("blogMisc", function(){
	console.log("Inside Misc....");
	return{
		templateUrl : 'partials/misc.html',
		controller : ''
	}
});