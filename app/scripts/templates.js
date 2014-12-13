angular.module('ms').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/components/fb_sdk/log_in/template.html',
    "<span>\n" +
    "  <button class=\"btn btn-warning fb-sign-in\" data-ng-click=\"login()\">Sign in with facebook</button>\n" +
    "</span>"
  );


  $templateCache.put('app/scripts/components/nav_bar/template.html',
    "<nav class=\"navbar navbar-default\" role=\"navigation\" data-ng-if=\"display\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <a class=\"navbar-brand\" href=\"/#home\">\n" +
    "        <span class=\"logo-tiny\">\n" +
    "          <img src=\"images/logo_white_40.png\"/>\n" +
    "        </span>\n" +
    "        <span>maskd</span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</nav>"
  );


  $templateCache.put('app/scripts/pages/home/template.html',
    ""
  );


  $templateCache.put('app/scripts/pages/index/template.html',
    "<div id=\"bg-backdrop\"></div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-12 text-center\">\n" +
    "    <div class=\"logo logo-128\">\n" +
    "      <img src=\"../images/logo_128.png\"/>\n" +
    "    </div>\n" +
    "    <h1 class=\"brand-name\">Maskd</h1>\n" +
    "    <h2 class=\"brand-tagline\">\n" +
    "      Share with friends, ask questions or tag them, <br>anonymously...\n" +
    "    </h2>\n" +
    "    <ms-fb-log-in \n" +
    "      data-connected=\"connected(response)\" \n" +
    "      data-unauthorized=\"unauthorized(response)\" \n" +
    "      data-unknown=\"unknown(response)\"></ms-fb-log-in>\n" +
    "\n" +
    "    <p class=\"quote\">\n" +
    "      <i>Man is least himself when talks in his own person. Give him a mask, and he will tell you the truth <br>- Oscar Wilde</i>\n" +
    "    </p>  \n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
