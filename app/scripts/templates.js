angular.module('ms').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/pages/home/template.html',
    "<h1>Home</h1>"
  );


  $templateCache.put('app/scripts/pages/index/template.html',
    "<div layout=\"row\" layout-padding> \n" +
    "  <div flex=\"10\"></div>\n" +
    "  <div flex=\"40\">\n" +
    "    <h1 class=\"brand-name\">Maskd</h1>\n" +
    "    <h2 class=\"brand-tagline\">When the world around you goes anonymous</h2>\n" +
    "    <md-button class=\"md-raised md-primary fb-sign-in\">Sign in with facebook</md-button>\n" +
    "  </div>\n" +
    "  <div flex=\"40\">\n" +
    "    <img src=\"http://www.google.com/inbox/assets/images/intro/intro-product.png\" class=\"brand-responsive\"/>\n" +
    "  </div>\n" +
    "  <div flex=\"10\"></div>\n" +
    "</div>\n"
  );

}]);
