(function(blog){
  'use strict';
  blog.getData = function(url){
    var promise = new Promise(function(resolve, reject){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function(){
        if(xhr.status == 200){
          resolve(xhr.response);
        }
        else {
          let error = {
            status: xhr.status,
            statusText: xhr.statusText
          }
          resolve(error);
        }
      }
      xhr.send();
    });
    return promise;
  }
})(window.blog = window.blog || {});
