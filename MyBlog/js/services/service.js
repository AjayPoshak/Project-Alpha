"use strict";
app.service('blogServices', function($http, $q){
  this.getBlogData= function(){
      return $http.get('http://127.0.0.1:8000/showData11')
        .then(function(response){
          console.log(response);
        })
        .finally(function(err){
          console.err(err);
        });
      }
  });
