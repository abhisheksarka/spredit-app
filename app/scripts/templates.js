angular.module('ms').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/components/conversation/create_box/modal_template.html',
    "<div class=\"modal-header text-center\">\n" +
    "  <h3 class=\"modal-title\">Strike a Conversation</h3>\n" +
    "  <span class=\"text-muted\">Choose any event or topic that interests you..</span>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <br>\n" +
    "  <span ms-create-box></span>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/conversation/create_box/template.html',
    "<div class=\"ms-create-box\">\n" +
    "  <div class=\"text-center\" ng-if=\"state.isWorking\">\n" +
    "    <div ms-spinner></div>\n" +
    "  </div>\n" +
    "  <form name=\"newConversationForm\" data-ng-submit=\"createConversation()\" ng-if=\"!state.isWorking\">\n" +
    "    <div class=\"form-group\" novalidate>\n" +
    "      <input type=\"text\" class=\"form-control conversation-title\" placeholder=\"Title\" ng-model=\"conversation.title\" ng-required=\"true\"/>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <select class=\"form-control\" \n" +
    "              ng-options=\"category.id as category.name group by category.grouping for category in categories\" \n" +
    "              ng-model=\"conversation.category.id\" data-ng-required=\"true\">\n" +
    "        <option disabled=\"true\" selected=\"true\" value='' class=\"placeholder\" default>Select a Category</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div class=\"text-center\">\n" +
    "      <button class=\"btn btn-success btn-sm\" ng-disabled=\"newConversationForm.$invalid\">Done</button>\n" +
    "    </div>\n" +
    "  </form>\n" +
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
    "    <ul class=\"nav navbar-nav\">\n" +
    "      <li>\n" +
    "        <a class=\"visible-xs visible-sm\" ng-click=\"toggleSideNav()\">\n" +
    "          <span class=\"glyphicon glyphicon-align-justify\"></span>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</nav>"
  );


  $templateCache.put('app/scripts/components/side_nav/template.html',
    "<nav id=\"side-nav\">\n" +
    "  <ul>\n" +
    "    <li>\n" +
    "      <a class=\"link-major\" data-ng-click=\"openCreateBox()\">\n" +
    "        <span class=\"glyphicon glyphicon-plus glyphicon-ring-wrap\"></span> \n" +
    "        <span>New Conversation</span>\n" +
    "      </a>\n" +
    "    </li>    \n" +
    "  </ul>\n" +
    "</nav>"
  );


  $templateCache.put('app/scripts/components/spinner/template.html',
    "<div class=\"ms-spinner\">\n" +
    "  <div class=\"ms-double-bounce-one\"></div>\n" +
    "  <div class=\"ms-double-bounce-two\"></div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/home/template.html',
    "<!-- <button class=\"btn btn-default\" data-ng-click=\"open()\">Open</button> -->"
  );


  $templateCache.put('app/scripts/pages/index/template.html',
    "<div id=\"bg-backdrop\"></div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-12 text-center\">\n" +
    "    <div class=\"logo logo-128\">\n" +
    "      <span class=\"glyphicon glyphicon-send\"></span>\n" +
    "    </div>\n" +
    "    <h1 class=\"brand-name\">Spredit</h1>\n" +
    "    <h2 class=\"brand-tagline\">\n" +
    "      The new way to spread information <br>around the world..<br>\n" +
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


  $templateCache.put('app/scripts/pages/location_prompt/template.html',
    "<div class=\"container\">\n" +
    "  <a class=\"logo logo-40\" href=\"#/\">\n" +
    "    <span class=\"glyphicon glyphicon-send\"></span>\n" +
    "  </a>\n" +
    "  <div class=\"ms-card user-info\">\n" +
    "    <div class=\"ms-thumbnail\">\n" +
    "      <img ng-src=\"{{currentUser.profile_picture}}\"/>\n" +
    "    </div>\n" +
    "    <h1 ng-bind=\"currentUser.name\">\n" +
    "    </h1>\n" +
    "    <p ng-bind=\"currentUser.email\" class=\"text-muted\"></p>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <div class=\"ms-card location-box\">\n" +
    "    <h3>\n" +
    "      Hi, It's great to see you here :)\n" +
    "    </h3>\n" +
    "    <img src=\"../images/map_128.png\" class=\"location-aware-icon\"/>\n" +
    "    <p>\n" +
    "      <a href=\"#/\">Spredit</a> is a location aware app, which means to proceed furthur you need to give us permission to access your current location.\n" +
    "    </p>\n" +
    "    <br>\n" +
    "    <button class=\"btn btn-default\">Grant permission</button>\n" +
    "    <br><br>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "</div>"
  );

}]);
