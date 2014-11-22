angular.module('ms').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/pages/home/template.html',
    "<h1>Home</h1>"
  );


  $templateCache.put('app/scripts/pages/index/template.html',
    "<div id=\"bg-backdrop\"></div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-12 text-center\">\n" +
    "    <div class=\"logo logo-128\">\n" +
    "      <img src=\"../images/logo_128.png\"/>\n" +
    "    </div>\n" +
    "    <h1 class=\"brand-name\">Maskd</h1>\n" +
    "    <h2 class=\"brand-tagline\">Share with friends, ask questions or tag friends, <br>anonymously...</h2>\n" +
    "    <button class=\"btn btn-warning fb-sign-in\">Sign in with facebook</button>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
