angular.module('ms').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/pages/home/template.html',
    "<h1>Home</h1>"
  );


  $templateCache.put('app/scripts/pages/index/template.html',
    "<div id=\"bg-backdrop\"></div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-12 text-center\">\n" +
    "    <h1 class=\"brand-name\">Maskd</h1>\n" +
    "    <h2 class=\"brand-tagline\">When the world around you goes anonymous</h2>\n" +
    "    <button class=\"btn btn-success fb-sign-in\">Sign in with facebook</button>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
