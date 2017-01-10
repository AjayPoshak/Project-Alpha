"use strict";
/**
 * Service to make the http request to retrieve the data
 * $http : to make the http request
 * $q : to resolve promises
 */
app.service('blogServices', function($http, $q){
  this.getBlogData = function(){
      return $http.get('http://127.0.0.1:8001/showHomePageData');
  };
  this.getArticlebyId = function(id){
    return $http.get('http://127.0.0.1:8001/getArticlebyId/'+id);
  };
  });
