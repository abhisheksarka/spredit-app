angular.module('ms').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/components/conversation/create_box/modal_template.html',
    "<div class=\"modal-header\">\n" +
    "  <h3 class=\"modal-title\">Start a conversation</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <span ms-create-box></span>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/conversation/create_box/template.html',
    "<div class=\"ms-create-box\">\n" +
    "  <input type=\"text\" class=\"form-control conversation-title\" placeholder=\"Title\"/>\n" +
    "  <br>\n" +
    "  <div>\n" +
    "    <button class=\"btn btn-success btn-sm\">Strike</button>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/fb_sdk/log_in/template.html',
    "<span>\n" +
    "  <button class=\"btn btn-success fb-sign-in\" data-ng-click=\"login()\">Sign in with facebook</button>\n" +
    "</span>"
  );


  $templateCache.put('app/scripts/components/nav_bar/template.html',
    "<nav class=\"navbar navbar-default\" role=\"navigation\" data-ng-if=\"display\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <a class=\"navbar-brand\" href=\"#home\">\n" +
    "        <span class=\"logo-tiny\">\n" +
    "          <img src=\"images/logo_40.png\"/>\n" +
    "        </span>\n" +
    "        <span>strikr</span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</nav>"
  );


  $templateCache.put('app/scripts/pages/home/template.html',
    "<button class=\"btn btn-default\" data-ng-click=\"open()\">Open</button>"
  );


  $templateCache.put('app/scripts/pages/index/template.html',
    "<div id=\"bg-backdrop\"></div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-12 text-center\">\n" +
    "    <div class=\"logo logo-128\">\n" +
    "      <img src=\"../images/logo_128.png\"/>\n" +
    "    </div>\n" +
    "    <h1 class=\"brand-name\">Strikr</h1>\n" +
    "    <h2 class=\"brand-tagline\">\n" +
    "      Listen to, participate or share conversations<br>about events and topics that interest you.\n" +
    "    </h2>\n" +
    "    <br><br>\n" +
    "    <span ms-fb-log-in \n" +
    "      data-connected=\"connected(response)\" \n" +
    "      data-unauthorized=\"unauthorized(response)\" \n" +
    "      data-unknown=\"unknown(response)\"></span>\n" +
    "\n" +
    "    <p class=\"quote\"></p>  \n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
