angular.module('ms').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/pages/home/template.html',
    "<h1>Home</h1>"
  );


  $templateCache.put('app/scripts/pages/index/template.html',
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <h1>Hello</h1>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\"></div>\n" +
    "</div>"
  );

}]);
