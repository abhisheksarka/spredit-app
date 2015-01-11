angular.module('ms').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/components/fb_sdk/log_in/template.html',
    "<span>\n" +
    "  <button class=\"btn btn-info fb-sign-in\" data-ng-click=\"login()\">Sign in with facebook</button>\n" +
    "</span>"
  );


  $templateCache.put('app/scripts/components/locator/map/template.html',
    "<ui-gmap-google-map center='map.center' zoom='map.zoom' draggable=\"map.draggable\" options=\"map.options\" refresh=\"map.refresh\">\n" +
    "  <ui-gmap-marker coords=\"location\" idkey=\"location.id\">\n" +
    "  </ui-gmap-marker>\n" +
    "</ui-gmap-google-map>"
  );


  $templateCache.put('app/scripts/components/locator/slider/template.html',
    "<div class=\"text-center locator-slider\">\n" +
    "  <h1 class=\"location-radius\">\n" +
    "    <span data-ng-bind=\"locationConfig.radius\"></span>\n" +
    "  </h1>\n" +
    "  <p class=\"unit\">KM</p>\n" +
    "  <div ui-slider=\"slider.options\" min=\"5\" max=\"30\" data-ng-model=\"locationConfig.radius\"></div>\n" +
    "  <p data-ng-bind=\"location.address\" class=\"address\"></p>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/locator/template.html',
    "<span class=\"text-center\">\n" +
    "  <div ng-if=\"reqState.isWorking\">\n" +
    "    <div ms-spinner></div>\n" +
    "    <p><small class=\"text-muted\">Finding you, please wait...</small></p>\n" +
    "  </div>\n" +
    "  <div data-ng-if=\"reqState.isError\">\n" +
    "    <p><small class=\"text-danger\">Bummer! Unable to geolocate you right now.</small></p>\n" +
    "  </div>\n" +
    "  <button class=\"btn btn-{{btnClass}}\" ng-bind=\"label\" ng-click=\"geolocate()\" ng-if=\"!reqState.isWorking\"></button>\n" +
    "</span>"
  );


  $templateCache.put('app/scripts/components/nav_bar/template.html',
    "<nav class=\"navbar navbar-default\" role=\"navigation\" data-ng-if=\"display\">\n" +
    "  <div class=\"container\">\n" +
    "    <ul class=\"nav navbar-nav\">\n" +
    "      <li class=\"visible-xs visible-sm\">\n" +
    "        <a ng-click=\"toggleSideNav()\">\n" +
    "          <span class=\"glyphicon glyphicon-align-justify\"></span>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "      <li class=\"hidden-xs hidden-sm\">\n" +
    "        <a>\n" +
    "          <span class=\"glyphicon glyphicon-send\"></span>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</nav>"
  );


  $templateCache.put('app/scripts/components/post/creator/template.html',
    "<div class=\"post-creator text-center\" style=\"max-width: 500px;margin-left:auto;margin-right:auto;\">\n" +
    "  <form name=\"newPostFrom\">\n" +
    "    <textarea placeholder=\"Spread something to the people near you\" \n" +
    "              class=\"form-control\" \n" +
    "              ng-model=\"post.postable.content\"\n" +
    "              name=\"content\"\n" +
    "              ng-required=\"true\">\n" +
    "    </textarea>\n" +
    "    <br>\n" +
    "    <input type=\"button\" class=\"btn btn-info btn-sm\" value=\"Spread it\" ng-disabled=\"newPostForm.$invalid\" ng-click=\"createPost()\"/>\n" +
    "  </form>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/side_nav/template.html',
    "<nav id=\"side-nav\">\n" +
    "  <ul>\n" +
    "    <li class=\"mm-selected\">\n" +
    "      <a class=\"link-major\" href=\"/#home\">\n" +
    "        <span class=\"glyphicon glyphicon-home\"></span> \n" +
    "        <span>Home</span>\n" +
    "      </a>\n" +
    "    </li> \n" +
    "    <li>\n" +
    "      <a class=\"link-major\">\n" +
    "        <span class=\"glyphicon glyphicon-user\"></span> \n" +
    "        <span>Me</span>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a class=\"link-major\">\n" +
    "        <span class=\"glyphicon glyphicon-globe\"></span> \n" +
    "        <span>Notifications</span>\n" +
    "      </a>\n" +
    "    </li> \n" +
    "    <li>\n" +
    "      <a class=\"link-major\" href=\"/#current_location\">\n" +
    "        <span class=\"glyphicon glyphicon-map-marker\"></span> \n" +
    "        <span>Current Location</span>\n" +
    "      </a>\n" +
    "    </li> \n" +
    "    <li>\n" +
    "      <a class=\"link-major\">\n" +
    "        <span class=\"glyphicon glyphicon-cog\"></span> \n" +
    "        <span>Settings</span>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a class=\"link-major\">\n" +
    "        <span class=\"glyphicon glyphicon-off\"></span> \n" +
    "        <span>Logout</span>\n" +
    "      </a>\n" +
    "    </li>   \n" +
    "  </ul>\n" +
    "</nav>"
  );


  $templateCache.put('app/scripts/components/spinner/template.html',
    "<span class=\"ms-spinner\">\n" +
    "  <span class=\"ms-double-bounce-one\"></span>\n" +
    "  <span class=\"ms-double-bounce-two\"></span>\n" +
    "</span>"
  );


  $templateCache.put('app/scripts/pages/current_location/template.html',
    "<div class=\"text-center\">\n" +
    "  <div class=\"slider-section section-top\">\n" +
    "    <div class=\"container\">\n" +
    "      <div ms-locator-slider></div>\n" +
    "      <br>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"map-section\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"ms-card\">\n" +
    "        <div ms-locator-map></div>\n" +
    "      </div>\n" +
    "      <br>\n" +
    "      <div ms-locator label=\"'Refresh'\" btn-class=\"'danger'\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/home/template.html',
    "<div ms-post-creator></div>"
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
    "  <a class=\"logo logo-25\" href=\"#/\">\n" +
    "    <span class=\"glyphicon glyphicon-send\"></span>\n" +
    "  </a>\n" +
    "  <div class=\"ms-card user-info\">\n" +
    "    <div class=\"ms-thumbnail\">\n" +
    "      <img ng-src=\"{{currentUser.profile_picture}}\"/>\n" +
    "    </div>\n" +
    "    <h3>\n" +
    "      <strong ng-bind=\"currentUser.name\"></strong>\n" +
    "    </h3>\n" +
    "    <p ng-bind=\"currentUser.email\" class=\"text-muted\"></p>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <div class=\"ms-card location-box\">\n" +
    "    <img src=\"../images/map_128.png\" class=\"location-aware-icon\"/>\n" +
    "    <p>\n" +
    "      <a href=\"#/\">Spredit</a> is a location aware app, which means to proceed furthur you need to give us permission to access your current location.\n" +
    "    </p>\n" +
    "    <br>\n" +
    "    <span ms-locator success-callback=\"redirectToHome(response)\"></span>\n" +
    "    <br><br>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "</div>"
  );

}]);
