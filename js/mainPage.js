(function(blog){
  'use strict';
  if(supportsTemplate()){
    attachHeader();

    var dataResponse = blog.getData('http://127.0.0.1:8001/showHomePageData');
    dataResponse.then(function(success){
      console.log(success);
      attachMiddleSection(success);
      attachFooter();
    })
    .catch(function(err){
      console.error(err);
    });

  }
  else{
    document.write("Please upgrade your browser");
  }
})(window.blog = window.blog || {});
