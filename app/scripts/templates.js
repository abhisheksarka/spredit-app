angular.module('ms').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/components/activity/renderer/template.html',
    "<div class=\"activity-renderer\">\n" +
    "  <div class=\"optional-header message\">\n" +
    "    <span>\n" +
    "      <span class=\"fa {{mappings[activity.action].iconClass}}\"></span>\n" +
    "      <span>\n" +
    "        <span ng-bind=\"mappings[activity.action].label\"></span>\n" +
    "      </span>\n" +
    "    </span>\n" +
    "    <span class=\"pull-right\">\n" +
    "      <small class=\"text-muted pull-right\" am-time-ago=\"activity.created_at\"></small>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  <div ng-if=\"activity.targetable_type == 'Post'\">\n" +
    "    <div ms-post-renderer post=\"activity.targetable\" record-view=\"false\" spreader-disabled=\"true\" modalify-post-actions=\"true\"></div>  \n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/comment/actions/template.html',
    "<small class=\"comment-actions\">\n" +
    "  <span class=\"fa fa-thumbs-up\" ng-click=\"vote(true)\"></span>\n" +
    "  <span>10</span>\n" +
    "  &nbsp;\n" +
    "  <span class=\"fa fa-thumbs-down\" ng-click=\"vote(false)\"></span>\n" +
    "  <span>35</span>\n" +
    "</small>"
  );


  $templateCache.put('app/scripts/components/comment/creator/template.html',
    "<div class=\"comment-creator\">\n" +
    "    <form name=\"newCommentForm\" novalidate>\n" +
    "      <textarea placeholder=\"What's your opinion on this?\" \n" +
    "                class=\"form-control\" \n" +
    "                ng-model=\"comment.content\"\n" +
    "                name=\"content\"\n" +
    "                style=\"height: auto\"\n" +
    "                ng-required=\"true\">\n" +
    "      </textarea><br>\n" +
    "      <button class=\"btn btn-transparent btn-sm btn-rounded btn-transparent-info\"  \n" +
    "              ng-disabled=\"newCommentForm.$invalid || state.isWorking\" \n" +
    "              ng-click=\"createComment()\">\n" +
    "              <span ng-if=\"state.isWorking\">Please wait...</span>\n" +
    "              <span ng-if=\"!state.isWorking\">Comment</span>\n" +
    "      </button>\n" +
    "    </form>  \n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/comment/lister/template.html',
    "<div class=\"comment-lister\" ng-if=\"commentable.id\">\n" +
    "  <div ms-infinite-scroll \n" +
    "       resource=\"Comment\" \n" +
    "       request-to=\"'query'\"  \n" +
    "       with-params=\"commentParams\"\n" +
    "       push-to=\"commentable.comments\"\n" +
    "       paginator=\"paginator\"\n" +
    "       uniq=\"'id'\"\n" +
    "       pagination-type=\"paginationType\">\n" +
    "  </div>\n" +
    "  <div class=\"ms-list\" ng-if=\"commentable.comments.length > 0\">\n" +
    "    <div ng-repeat=\"comment in commentable.comments\">\n" +
    "      <div ms-comment-renderer comment=\"comment\"></div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"paginationType == 'loadMore'\">\n" +
    "      <div class=\"text-center\" ng-if=\"!paginator.isComplete && !paginator.state.isWorking\">\n" +
    "        <button class=\"btn btn-sm btn-transparent\" ng-click=\"paginator.paginate()\">Load more</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"text-center\">\n" +
    "    <!-- <div ng-if=\"comments.length == 0 && requestState.isComplete\">\n" +
    "      <small class=\"text-muted\">Nothing to show here...</small>\n" +
    "    </div> -->\n" +
    "    <div ng-if=\"paginator.state.isWorking\">\n" +
    "      <div ms-spinner></div>\n" +
    "      <p><small class=\"text-muted\">Please wait</small></p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/comment/renderer/template.html',
    "<div class=\"ms-list-item comment-renderer\">\n" +
    "  <div class=\"list-avatar profile-photo\">\n" +
    "    <img ng-src=\"{{comment.comment_publishable.profile_picture}}\"/>\n" +
    "  </div>\n" +
    "  <div class=\"list-content\">\n" +
    "    <div class=\"primary\">\n" +
    "      <h4 class=\"header\">\n" +
    "        <span ng-bind=\"comment.comment_publishable.name\"></span>\n" +
    "        <small class=\"text-muted pull-right\" am-time-ago=\"comment.created_at\"></small>\n" +
    "      </h4>\n" +
    "    </div>\n" +
    "    <div class=\"secondary\">\n" +
    "      <small ng-bind=\"comment.content\" class=\"text-muted\"></small>\n" +
    "      <!-- <br>\n" +
    "      <div class=\"list-actions\">\n" +
    "        <div ms-comment-actions comment=\"comment\"></div>\n" +
    "      </div -->\n" +
    "    </div>\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/dialog/template.html',
    "<div class=\"modal-body text-center\">\n" +
    "  <br>\n" +
    "  <div ng-bind-html=\"template\">\n" +
    "  </div>  \n" +
    "  <br>\n" +
    "  <button class=\"btn btn-sm btn-default\" ng-click=\"close()\">Okay, Got it</button>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/fb_sdk/log_in/template.html',
    "<span>\n" +
    "  <button class=\"btn btn-rounded btn-info fb-sign-in\" data-ng-click=\"login()\" ng-disabled=\"loginDisabled\">Sign in with facebook</button>\n" +
    "</span>"
  );


  $templateCache.put('app/scripts/components/flash/template.html',
    "<div class=\"ms-flash\">\n" +
    "  <div ng-repeat=\"message in messages\">\n" +
    "    <div class=\"message ms-animation-fade-in\">\n" +
    "      <span class=\"glyphicon {{iconMapping[flashType].iconClass}} {{iconMapping[flashType].colorClass}}\">\n" +
    "      </span>&nbsp;\n" +
    "      <span ng-bind=\"message\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/full_image/modal_template.html',
    "<div class=\"modal-body\">\n" +
    "  <img ng-src=\"{{imageUrl}}\" width=\"100%\"/>      \n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/full_image/template.html',
    "<button class=\"btn btn-inverse btn-sm action\" ng-click=\"openModal()\">\n" +
    "  <span class=\"glyphicon glyphicon-eye-open\"></span>&nbsp;View photo\n" +
    "</button>"
  );


  $templateCache.put('app/scripts/components/locator/geolocation_ins_template.html',
    "<div>\n" +
    "  <p>\n" +
    "    <a href=\"#/\">Spredit</a> will now attempt to find you. \n" +
    "  </p>\n" +
    "  <p>\n" +
    "    You will most likely see a browser dialog asking for permission to share your location. \n" +
    "    <strong>Make sure you click on allow.</strong>\n" +
    "  </p>  \n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/locator/map/template.html',
    "<ui-gmap-google-map center='map.center' zoom='map.zoom' options=\"map.options\" refresh=\"map.refresh\">\n" +
    "  <ui-gmap-marker coords=\"location\" idkey=\"location.id\">\n" +
    "  </ui-gmap-marker>\n" +
    "</ui-gmap-google-map>"
  );


  $templateCache.put('app/scripts/components/locator/slider/template.html',
    "<div class=\"text-center locator-slider\">\n" +
    "  <h1 class=\"location-radius\">\n" +
    "    <span data-ng-bind=\"locationConfig.radius\"></span>\n" +
    "  </h1>\n" +
    "  <p class=\"unit text-muted\">KM</p>\n" +
    "  <div ui-slider=\"slider.options\" min=\"5\" max=\"15\" data-ng-model=\"locationConfig.radius\"></div>\n" +
    "  <p data-ng-bind=\"location.address\" class=\"address text-muted\"></p>\n" +
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
    "  <button class=\"btn btn-{{btnClass}}\" \n" +
    "          ng-bind=\"label\" \n" +
    "          ng-click=\"showDialog()\" \n" +
    "          ng-disabled=\"reqState.isWorking\">\n" +
    "  </button>\n" +
    "  <!-- <br><br>\n" +
    "  <small>Having problems with geolocation? \n" +
    "    <a ng-click=\"t.showManualInput=!t.showManualInput\">\n" +
    "      Set your location manually\n" +
    "    </a>\n" +
    "  </small>\n" +
    "  <form name=\"manualLocationInputForm\" ng-if=\"t.showManualInput\">\n" +
    "    <input type=\"text\" \n" +
    "           g-places-autocomplete \n" +
    "           ng-model=\"t.manualLocation\" \n" +
    "           class=\"form-control\" \n" +
    "           ng-if=\"t.showManualInput\" \n" +
    "           placeholder=\"Select a location\" \n" +
    "           style=\"text-align: center\"\n" +
    "           required=\"true\"\n" +
    "           ng-required=\"true\"/>\n" +
    "           <br>\n" +
    "    <button class=\"btn btn-{{btnClass}}\"  \n" +
    "            ng-click=\"manualSave()\" \n" +
    "            ng-disabled=\"reqState.isWorking || manualLocationInputForm.$invalid\">\n" +
    "            <span ng-if=\"reqState.isWorking\">Saving...</span>\n" +
    "            <span ng-if=\"!reqState.isWorking\">Save</span>\n" +
    "    </button>  \n" +
    "  </form> -->   \n" +
    "</span>"
  );


  $templateCache.put('app/scripts/components/nav_bar/template.html',
    "<nav class=\"navbar navbar-default\" role=\"navigation\" data-ng-if=\"display\">\n" +
    "  <div class=\"rainbow-dash\">\n" +
    "    <div class=\"color-section bg-success\"></div>\n" +
    "    <div class=\"color-section bg-danger\"></div>\n" +
    "    <div class=\"color-section bg-brown\"></div>\n" +
    "    <div class=\"color-section bg-warning\"></div>\n" +
    "  </div>\n" +
    "  <div class=\"container ms-master-section\" data-ng-if=\"signedIn\">\n" +
    "    <ul class=\"nav navbar-nav\">\n" +
    "      <li>\n" +
    "        <a href=\"#/home\" tooltip=\"Home\" tooltip-placement=\"bottom\" ng-class=\"{'active': (location.$$path == '/home')}\">\n" +
    "          <span class=\"fa fa-share-alt brand-icon\"></span>\n" +
    "        </a>\n" +
    "        <a href=\"#/me\" tooltip=\"Me\" tooltip-placement=\"bottom\" ng-class=\"{'active': (location.$$path == '/me')}\">\n" +
    "          <span class=\"fa fa-circle text-danger notification-indicator ms-animation-pulsate\" \n" +
    "                ng-if=\"currentUser.unread_notifications_count > 0\">\n" +
    "          </span>\n" +
    "          <span class=\"fa fa-user brand-icon\"></span>\n" +
    "        </a>\n" +
    "        <a href=\"/#current_location\" tooltip=\"Current location\" tooltip-placement=\"bottom\" ng-class=\"{'active': (location.$$path == '/current_location')}\">\n" +
    "          <span class=\"fa fa-map-marker brand-icon\"></span>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <ul class=\"nav navbar-nav navbar-right\">\n" +
    "      <li>\n" +
    "        <a ng-click=\"signOut()\" tooltip=\"Sign out\" tooltip-placement=\"bottom\">\n" +
    "          <span class=\"fa fa-sign-out brand-icon\"></span>\n" +
    "        </a>\n" +
    "        <a ng-click=\"openPostCreator()\" class=\"btn-link\">\n" +
    "          <span class=\"btn btn-sm btn-danger nav-button btn-transparent\">Publish</span>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "  <div class=\"container\" data-ng-if=\"!signedIn\">\n" +
    "    <ul class=\"nav navbar-nav\">\n" +
    "      <li>\n" +
    "        <a href=\"https://www.facebook.com/pages/Spredit/849011651809054\" target=\"_blank\">\n" +
    "          <span class=\"fa fa-facebook\"></span>&nbsp;&nbsp;Like\n" +
    "        </a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"https://www.twitter.com/spreditapp\" target=\"_blank\">\n" +
    "          <span class=\"fa fa-twitter\"></span>&nbsp;&nbsp;Follow\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</nav>"
  );


  $templateCache.put('app/scripts/components/notification/renderer/template.html',
    "<div class=\"notification-renderer\">\n" +
    "  <div class=\"col-sm-12 notification-flash\">\n" +
    "    <div class=\"ms-card\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-4 notification-message\" ng-if=\"post.new_comments_count > 0\">\n" +
    "          <span class=\"fa fa-comment\"></span>\n" +
    "          <span ng-bind=\"post.new_comments_count\" class=\"value text-success\"></span> new \n" +
    "          <span ng-if=\"post.new_comments_count > 1\">comments</span>\n" +
    "          <span ng-if=\"post.new_comments_count == 1\">comment</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 notification-flash\" ng-if=\"post.new_spreads_count > 0\">\n" +
    "          <span class=\"fa fa-check\"></span>\n" +
    "          <span ng-bind=\"post.new_spreads_count\" class=\"value text-success\"></span> new\n" +
    "          <span ng-if=\"post.new_spreads_count > 1\">spreads</span>\n" +
    "          <span ng-if=\"post.new_spreads_count == 1\">spread</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 notification-flash\" ng-if=\"post.new_contains_count > 0\">\n" +
    "          <span class=\"fa fa-remove\"></span>\n" +
    "          <span ng-bind=\"post.new_contains_count\" class=\"value text-success\"></span> new\n" +
    "          <span ng-if=\"post.new_contains_count > 1\">contains</span>\n" +
    "          <span ng-if=\"post.new_contains_count == 1\">contain</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-12\">\n" +
    "    <div ms-post-renderer post=\"post\" record-view=\"false\" spreader-disabled=\"true\" modalify-post-actions=\"true\"></div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/post/actions/modal_template.html',
    "<div class=\"modal-body\">\n" +
    "  <div class=\"close-modal-icon\">\n" +
    "    <a ng-click=\"close()\" class=\"btn btn-sm btn-transparent btn-rounded\">\n" +
    "      <span class=\"fa fa-arrow-left\"></span>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <div ms-post-details post=\"post\" action=\"action\" comments-pagination-type=\"'loadMore'\"></div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/post/actions/template.html',
    "<small class=\"post-actions\">\n" +
    "  <span class=\"text-muted\" ng-if=\"!modalify\">\n" +
    "    <a ng-click=\"setSelectedAction('comments')\">\n" +
    "      <span class=\"fa fa-comment\"></span>&nbsp;\n" +
    "      <span ng-if=\"selectedAction=='comments'\">\n" +
    "        <span><span ng-bind=\"post.comments_count\"></span>\n" +
    "      </span>\n" +
    "      <span ng-if=\"!(selectedAction=='comments')\">\n" +
    "        <span ng-bind=\"post.comments_count\"></span>\n" +
    "      </span>\n" +
    "      &nbsp;&nbsp;\n" +
    "    </a>\n" +
    "    <span class=\"pull-right\" ng-class=\"\">\n" +
    "      <span>\n" +
    "        <h3 class=\"spread-value\">\n" +
    "          <span ng-bind=\"post.spreads_count | displayNumber\"></span>\n" +
    "        </h3>\n" +
    "      </span>\n" +
    "    </span>\n" +
    "  </span>\n" +
    "  <span class=\"\" ng-if=\"modalify\">\n" +
    "    <a ng-click=\"openModal(post, 'comments')\">\n" +
    "      <span>\n" +
    "        <span class=\"fa fa-comment\"></span>&nbsp;<span ng-bind=\"post.comments_count\"></span>\n" +
    "        &nbsp;&nbsp;\n" +
    "      </span>\n" +
    "    </a>\n" +
    "    <a ng-click=\"openModal(post, 'propagation')\">\n" +
    "      <span>\n" +
    "        <span class=\"fa fa-map-marker\"></span>&nbsp;<span ng-bind=\"post.total_propagation\"></span> KM\n" +
    "        &nbsp;&nbsp;\n" +
    "      </span>\n" +
    "    </a>\n" +
    "    <span>\n" +
    "        <span class=\"fa fa-plus-square\" \n" +
    "              ng-class=\"{'text-danger': (post.life == 1 || post.life == 2), 'text-warning': (post.life == 3 || post.life == 4), 'text-success': (post.life > 4)}\">\n" +
    "        </span>\n" +
    "        health (<span ng-bind=\"post.life\"></span>)\n" +
    "    </span>\n" +
    "    <span class=\"pull-right text-muted\">\n" +
    "      <h2 class=\"spread-value\" ng-bind=\"post.spreads_count | displayNumber\"></h2>\n" +
    "    </span>\n" +
    "  </span>\n" +
    "</small>"
  );


  $templateCache.put('app/scripts/components/post/categories/modal_template.html',
    "<div class=\"modal-body text-left\">\n" +
    "  <br>\n" +
    "  <h5><strong>Select categories you want to see.</strong></h5>\n" +
    "  <br>  \n" +
    "  <div class=\"text-left list-group\">\n" +
    "    <div ng-repeat=\"category in categories\">\n" +
    "      <div class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" id=\"{{category.value}}\" ng-model=\"category.checked\">\n" +
    "        <label for=\"{{category.value}}\">\n" +
    "            {{category.label}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <button class=\"btn btn-sm btn-inverse\" ng-click=\"save()\" ng-disabled=\"reqState.isWorking\">\n" +
    "    <span ng-if=\"reqState.isWorking\">Saving...</span>\n" +
    "    <span ng-if=\"!reqState.isWorking\">Save</span>\n" +
    "  </button>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/post/categories/template.html',
    "<a ng-click=\"openModal()\" class=\"category-settings\">\n" +
    "  <span class=\"fa fa-cog\"></span>\n" +
    "</a>"
  );


  $templateCache.put('app/scripts/components/post/creator/template.html',
    "<div class=\"post-creator text-center\">\n" +
    "  <form name=\"newPostForm\" novalidate>\n" +
    "    <div ms-post-photo-uploader postable-object=\"postable\" postable-refresh=\"refresh\"></div>\n" +
    "    <br>\n" +
    "    <textarea placeholder=\"Spread your thoughts to the people around you\" \n" +
    "              msd-elastic=\"\\n\"\n" +
    "              class=\"form-control\" \n" +
    "              ng-model=\"post.content\"\n" +
    "              name=\"content\">\n" +
    "    </textarea>\n" +
    "    <br>\n" +
    "    <div class=\"text-left\">\n" +
    "      <button class=\"btn btn-transparent btn-sm btn-rounded btn-transparent-info\" ng-disabled=\"newPostForm.$invalid || reqState.isWorking\" ng-click=\"createPost()\">\n" +
    "        <span ng-if=\"reqState.isWorking\">Publishing</span>\n" +
    "        <span ng-if=\"!reqState.isWorking\">Publish</span>\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/post/creator_modal/template.html',
    "<div class=\"modal-body\">\n" +
    "  <span ms-post-creator success=\"success(response)\" error=\"error(response)\"></span>\n" +
    "  <br>\n" +
    "  <div>\n" +
    "    <a class=\"btn btn-transparent btn-sm btn-rounded btn-transparent\" \n" +
    "       style=\"position: relative; top: -54px; margin-left: 110px;\" \n" +
    "       ng-click=\"close()\">CLOSE</a>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/post/details/template.html',
    "<div class=\"ms-card-complex post-details {{action}}\">\n" +
    "  <div ng-if=\"currentMapping\">\n" +
    "    <div ng-if=\"action == 'propagation'\">\n" +
    "      <div ms-statistics post=\"post\"></div>\n" +
    "      <div ms-propagation post=\"post\"></div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"action == 'comments'\" class=\"supporting-text\">\n" +
    "      <div ms-comment-creator commentable=\"post\" commentable-type=\"'Post'\"></div><br>\n" +
    "      <div ms-comment-lister commentable=\"post\" pagination-type=\"commentsPaginationType\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/post/photo_uploader/template.html',
    "<div class=\"post-photo-uploader\">\n" +
    "  <div ng-class=\"{'hide': postPhoto.id}\" > \n" +
    "    <span class=\"glyphicon glyphicon-ring-wrap glyphicon-camera\" \n" +
    "          ng-file-select ng-model=\"photos\" \n" +
    "          ng-class=\"{'hide': states.uploading.isWorking}\">\n" +
    "    </span> \n" +
    "    <span class=\"glyphicon glyphicon-ring-wrap ms-animation-border-rotate\" \n" +
    "          ng-class=\"{'hide': !states.uploading.isWorking}\">\n" +
    "    </span>\n" +
    "    <p class=\"text-muted\" style=\"font-size:12px;padding-bottom: 15px;\">Image format should be jpg, jpeg or png and size should be less than 5MB.</p>\n" +
    "  </div>\n" +
    "  <div ng-if=\"postPhoto.id\">\n" +
    "    <div class=\"preview\">\n" +
    "      <img ng-src=\"{{postPhoto.photo.url}}\"/>\n" +
    "      <div class=\"delete-upload\">\n" +
    "        <span class=\"glyphicon glyphicon-ring-wrap glyphicon-remove\"   \n" +
    "              ng-class=\"{'hide': states.destroying.isWorking}\"\n" +
    "              ng-click=\"destroyUpload()\">\n" +
    "        </span> \n" +
    "        <span class=\"glyphicon glyphicon-ring-wrap ms-animation-border-rotate\" \n" +
    "              ng-class=\"{'hide': !states.destroying.isWorking}\">\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>    \n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/post/renderer/template.html',
    "<div class=\"post-renderer\">\n" +
    "  <div class=\"ms-card-complex\">\n" +
    "    <span ng-if=\"recordView\">\n" +
    "      <span ms-view-recorder viewable=\"post\" viewable-type=\"'Post'\"></span>\n" +
    "    </span>\n" +
    "    <div class=\"optional-header\">\n" +
    "      <div class=\"ms-list-item\">\n" +
    "        <div class=\"list-avatar\">\n" +
    "          <img src=\"../images/male.png\" ng-if=\"post.poster_gender != 'female'\"/>\n" +
    "          <img src=\"../images/female.png\" ng-if=\"post.poster_gender == 'female'\"/>\n" +
    "        </div>\n" +
    "        <div class=\"list-content\">\n" +
    "          <div class=\"primary\">\n" +
    "            <h5 class=\"header\">\n" +
    "              <strong>\n" +
    "                <span ng-bind=\"post.display_address\"></span>\n" +
    "              </strong>\n" +
    "            </h5>\n" +
    "          </div>\n" +
    "          <div class=\"secondary\">\n" +
    "            <small class=\"text-muted\" am-time-ago=\"post.created_at\"></small>\n" +
    "          </div>\n" +
    "        </div>  \n" +
    "      </div>\n" +
    "      <div class=\"clearfix\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- rich media, can contain photo, links or videos -->\n" +
    "    <div class=\"rich-media\" ng-if=\"post.postable_type=='PostPhoto'\" ng-class=\"{'show-full-media': fullMedia}\">\n" +
    "      <img ng-src=\"{{post.postable.photo.url}}\" \n" +
    "           width=\"100%\" \n" +
    "           ms-img-dimensions \n" +
    "           img-height=\"imgHeight\" \n" +
    "           img-loaded=\"imgLoaded\"\n" +
    "      />\n" +
    "      <div class=\"rich-media-actions text-center\" ng-if=\"imgLoaded && (imgHeight > 250)\">\n" +
    "        <button class=\"btn ms-fab fab-transparent\" ng-click=\"toggleFullMedia()\" ng-show=\"!fullMedia\">\n" +
    "          <span class=\"fa fa-angle-double-down\"></span>\n" +
    "        </button>\n" +
    "        <button class=\"btn ms-fab fab-transparent\" ng-click=\"toggleFullMedia()\" ng-show=\"fullMedia\">\n" +
    "          <span class=\"fa fa-angle-double-up\"></span>\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <!-- supporting text holds the text content of the post -->\n" +
    "    <div class=\"supporting-text\">\n" +
    "      <h2 ms-linkify=\"post.content\" ng-if=\"post.content\" class=\"post-content\"></h2>\n" +
    "      <span ng-if=\"post.content\">\n" +
    "        <br>\n" +
    "        <hr ng-if=\"!spreaderDisabled\">\n" +
    "        <div ms-spread-creator \n" +
    "            spreadable=\"post\" \n" +
    "            resource-owner=\"'post_publishable'\" \n" +
    "            is-disabled=\"spreaderDisabled\"></div>\n" +
    "      </span>\n" +
    "      <span ng-if=\"!post.content\">\n" +
    "        <div ms-spread-creator \n" +
    "             spreadable=\"post\" \n" +
    "             resource-owner=\"'post_publishable'\" \n" +
    "             class=\"post-with-only-photo\" \n" +
    "             is-disabled=\"spreaderDisabled\"></div>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "    <div class=\"actions\">\n" +
    "      <span ms-post-actions post=\"post\" selected-action=\"selectedAction\" modalify=\"modalifyPostActions\" map-disabled=\"mapDisabled\"></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/propagation/template.html',
    "<div class=\"ms-propagation\">\n" +
    "  <div class=\"text-center\" ng-if=\"!map.init\">\n" +
    "    <div ms-spinner></div>\n" +
    "    <p><small class=\"text-muted\">Loading map</small></p>\n" +
    "  </div>\n" +
    "  <div ng-if=\"map.init\">\n" +
    "    <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" bounds=\"map.bounds\" options=\"map.options\">\n" +
    "      <ui-gmap-markers models=\"locations\" coords=\"'self'\" fit=\"true\" icon=\"'iconUrl'\"></ui-gmap-markers>\n" +
    "    </ui-gmap-google-map>\n" +
    "  </div>\n" +
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
    "      <a class=\"link-major\" href=\"/#me\">\n" +
    "        <span class=\"glyphicon glyphicon-user\"></span> \n" +
    "        <span>Me</span>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a class=\"link-major\" href=\"/#notifications\">\n" +
    "        <span class=\"glyphicon glyphicon-globe\"></span> \n" +
    "        <span>Notifications</span>\n" +
    "        <span class=\"notification-count\" \n" +
    "              ng-bind=\"currentUser.unread_notifications_count\"\n" +
    "              ng-if=\"currentUser.unread_notifications_count > 0\">\n" +
    "        </span>\n" +
    "      </a>\n" +
    "    </li> \n" +
    "    <li>\n" +
    "      <a class=\"link-major\" href=\"/#current_location\">\n" +
    "        <span class=\"glyphicon glyphicon-map-marker\"></span> \n" +
    "        <span>Current Location</span>\n" +
    "      </a>\n" +
    "    </li> \n" +
    "    <li>\n" +
    "      <span class=\"link-major\" ng-click=\"signOut()\">\n" +
    "        <span class=\"glyphicon glyphicon-off\"></span> \n" +
    "        <span>Sign out</span>\n" +
    "      </span>\n" +
    "    </li>  \n" +
    "    <li>\n" +
    "      <a class=\"link-major\" href=\"https://www.facebook.com/pages/Spredit/849011651809054\" target=\"_blank\">\n" +
    "        <span class=\"ms-fab btn btn-primary glyphicon\">\n" +
    "          <span class=\"fa fa-facebook\"></span> \n" +
    "        </span>\n" +
    "        <span>Like us</span>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a class=\"link-major\" href=\"https://www.twitter.com/spreditapp\" target=\"_blank\">\n" +
    "        <span class=\"ms-fab btn btn-info glyphicon\">\n" +
    "          <span class=\"fa fa-twitter\"></span> \n" +
    "        </span>\n" +
    "        <span>Follow us</span>\n" +
    "      </a>\n" +
    "    </li> \n" +
    "  </ul>\n" +
    "</nav>"
  );


  $templateCache.put('app/scripts/components/spinner/template.html',
    "<span class=\"ms-spinner\">\n" +
    "  <span class=\"ms-double-bounce-one\"></span>\n" +
    "  <span class=\"ms-double-bounce-two\"></span>\n" +
    "</span>"
  );


  $templateCache.put('app/scripts/components/spread/creator/template.html',
    "<div class=\"text-center spreader\" ng-if=\"!isDisabled\">\n" +
    "  <span>\n" +
    "    <span class=\"ms-fab btn btn-info contain\" \n" +
    "    \t\t\tng-click=\"containIt()\" \n" +
    "    \t\t\tng-class=\"{'disabled': isDisabled || requestState.isWorking || (currentUser.id == spreadable[resourceOwner].id)}\">\n" +
    "      <span class=\"fa fa-remove\"></span>\n" +
    "    </span>\n" +
    "    <span class=\"ms-fab btn btn-info spread\" \n" +
    "    \t\t\tng-click=\"spreadIt()\" \n" +
    "    \t\t\tng-class=\"{'disabled': isDisabled || requestState.isWorking || (currentUser.id == spreadable[resourceOwner].id)}\">\n" +
    "      <span class=\"fa fa-check\"></span>\n" +
    "    </span>\n" +
    "  </span>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/spread/lister/template.html',
    "<div class=\"spread-lister\">\n" +
    "  <div class=\"ms-list\">\n" +
    "    <div class=\"ms-list-item\" ng-repeat=\"spread in spreads\">\n" +
    "      <div class=\"list-avatar\">\n" +
    "        <img ng-src=\"{{spread.spread_publishable.profile_picture}}\"/>\n" +
    "      </div>\n" +
    "      <div class=\"list-content\">\n" +
    "        <div class=\"primary\">\n" +
    "          <h4 class=\"header\">\n" +
    "            <span ng-bind=\"spread.spread_publishable.name\"></span>\n" +
    "          </h4>\n" +
    "        </div>\n" +
    "        <div class=\"secondary\">\n" +
    "          <small class=\"text-muted\" am-time-ago=\"spread.created_at\"></small>\n" +
    "        </div>\n" +
    "        <div class=\"clearfix\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/components/statistics/template.html',
    "<div class=\"statistics\">\n" +
    "  <div class=\"listing\">\n" +
    "    <div class=\"listing-section\">\n" +
    "      <span class=\"value\" ng-bind=\"post.views_count\"></span>&nbsp;\n" +
    "      <br>\n" +
    "      <small class=\"text-muted\">VIEWS</small>\n" +
    "    </div>\n" +
    "    <div class=\"listing-section\">\n" +
    "      <span class=\"value\" ng-bind=\"post.spreads_count\"></span>&nbsp;\n" +
    "      <br>\n" +
    "      <small class=\"text-muted\">SPREADS</small>\n" +
    "      <progressbar value=\"post.spreads_count\" max=\"post.spreads_count + post.contains_count\" type=\"info\"></progressbar>\n" +
    "    </div>\n" +
    "    <div class=\"listing-section\">\n" +
    "      <span class=\"value\" ng-bind=\"post.contains_count\"></span>&nbsp;\n" +
    "      <br>\n" +
    "      <small class=\"text-muted\">CONTAINS</small>\n" +
    "    </div>\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/current_location/template.html',
    "<div class=\"container\">\n" +
    "  <div class=\"ms-master-section\">\n" +
    "    <div class=\"ms-card-complex user-info ms-shadow-depth-20\">\n" +
    "      <div class=\"optional-header\">\n" +
    "        <div class=\"ms-list-item\">\n" +
    "          <div class=\"glyphicon-avatar\">\n" +
    "            <span class=\"glyphicon glyphicon-map-marker\"></span>\n" +
    "          </div>\n" +
    "          <div class=\"list-content\">\n" +
    "            <div class=\"primary\">\n" +
    "              <h5 class=\"header\">\n" +
    "                <strong>\n" +
    "                  Current Location\n" +
    "                </strong>\n" +
    "              </h5>\n" +
    "            </div>\n" +
    "            <div class=\"secondary\">\n" +
    "              ...\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>  \n" +
    "      </div>\n" +
    "      <div class=\"supporting-text text-muted\">\n" +
    "        Drag the slider to set the radius based on which information will be fetched from around you.\n" +
    "        <br>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div class=\"slider-section text-center\">\n" +
    "      <div>\n" +
    "        <div ms-locator-slider></div>\n" +
    "        <br>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"map-section text-center\">\n" +
    "      <div>\n" +
    "        <div class=\"ms-card\">\n" +
    "          <div ms-locator-map></div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div ms-locator label=\"'Refresh'\" btn-class=\"'info'\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/home/template.html',
    "<div class=\"container\">\n" +
    "  <div class=\"ms-master-section\">\n" +
    "    <div ng-if=\"loadState.isComplete && !currentPost.id\" class=\"text-center\">\n" +
    "      <div class=\"all-caught-up\">\n" +
    "        <h4 class=\"text-muted\">\n" +
    "          All caught up. \n" +
    "        </h4>\n" +
    "      </div>\n" +
    "      <div class=\"try-publishing\">\n" +
    "        <p>\n" +
    "          <a ng-click=\"openPostCreator()\">Try publishing something now</a>, and see it propagate across the world.\n" +
    "        </p>\n" +
    "        <img src=\"../images/globe.png\"/>\n" +
    "      </div>\n" +
    "      <div class=\"help-us-grow\">\n" +
    "        <p>Help us grow ;)</p>\n" +
    "        <a class=\"link-major\" href=\"https://www.facebook.com/spreditapp\" target=\"_blank\">\n" +
    "          <span class=\"ms-fab btn btn-primary glyphicon\">\n" +
    "            <span class=\"fa fa-facebook\"></span> \n" +
    "          </span>\n" +
    "        </a>\n" +
    "        <a class=\"link-major\" href=\"https://www.twitter.com/spreditapp\" target=\"_blank\">\n" +
    "          <span class=\"ms-fab btn btn-info glyphicon\">\n" +
    "            <span class=\"fa fa-twitter\"></span> \n" +
    "          </span>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"loadState.isWorking\" class=\"text-center\">\n" +
    "      <div ms-spinner></div>\n" +
    "      <p><small class=\"text-muted\">Please wait</small></p>\n" +
    "    </div>\n" +
    "    <div ng-if=\"currentPost.id\" \n" +
    "         ms-animator=\"ms-animation-zoom-in\" \n" +
    "         on-change-in=\"{{currentPost.id}}\">\n" +
    "      <div ms-post-renderer post=\"currentPost\"    \n" +
    "           selected-action=\"actions.selected\" \n" +
    "           record-view=\"true\" \n" +
    "           show-all-actions=\"true\" \n" +
    "           map-disabled=\"true\"\n" +
    "           full-media=\"true\">\n" +
    "      </div>\n" +
    "      <br>\n" +
    "      <div ms-post-details post=\"currentPost\" action=\"actions.selected\" ng-if=\"currentPost.id\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/index/template.html',
    "<div class=\"banner\">\n" +
    "  <div class=\"wrap text-center\">\n" +
    "    <div class=\"logo text-center\">\n" +
    "      <a href=\"index.html\"><img src=\"../images/vendor/logo.png\"></a>\n" +
    "    </div>\n" +
    "    <p>A <span style=\"text-decoration: line-through; font-weight: 100;\">not so</span> different </br> <span>way to share.</span></p>\n" +
    "    <span ms-fb-log-in \n" +
    "          login-disabled=\"loginState.isWorking\"\n" +
    "          data-connected=\"connected(response)\" \n" +
    "          data-unauthorized=\"unauthorized(response)\" \n" +
    "          data-unknown=\"unknown(response)\">\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"ms-master-section text-center container\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "      <h3 class=\"text-muted screen-desc\">\n" +
    "        Post a thought, ask a question or upload a photo. \n" +
    "      </h3>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6\">\n" +
    "      <div class=\"screen-container\">\n" +
    "        <img src=\"../images/screen_publish.png\"/>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-12\">\n" +
    "      <hr>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-6 visible-xs\">\n" +
    "      <h3 class=\"text-muted screen-desc\">\n" +
    "        It instantely propagates to the people around you. They can choose to spread it further or contain it.\n" +
    "      </h3>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6\">\n" +
    "      <div class=\"screen-container\">\n" +
    "        <img src=\"../images/screen_home.png\"/>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 hidden-xs\">\n" +
    "      <h3 class=\"text-muted screen-desc\">\n" +
    "        It instantely propagates to the people around you. They can choose to spread it further or contain it.\n" +
    "      </h3>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-12\">\n" +
    "      <hr>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "      <h3 class=\"text-muted screen-desc\">\n" +
    "        See how far your post has spread and how people are responding.\n" +
    "      </h3>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6\">\n" +
    "      <div class=\"screen-container\">\n" +
    "        <img src=\"../images/screen_map.png\"/>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-12\">\n" +
    "      <br><br>\n" +
    "      <h1>\n" +
    "        <strong>Here, the whole world is your audience.</strong>\n" +
    "      </h1>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/location_prompt/template.html',
    "<div class=\"container\">\n" +
    "  <div class=\"logo logo-25 ms-animation-zoom-in\">\n" +
    "    <span>\n" +
    "      <span class=\"fa fa-location-arrow\"></span>\n" +
    "    <span> \n" +
    "  </div>\n" +
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
    "      <a href=\"#/\">Spredit</a> is a location aware app, to proceed furthur you need to give us permission to access your current location.\n" +
    "    </p>\n" +
    "    <br>\n" +
    "    <span ms-locator success-callback=\"afterLocationSet(response)\" show-ins-dialog=\"true\"></span>\n" +
    "    <br><br>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/me/template.html',
    "<div>\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"ms-master-section\">\n" +
    "      <div class=\"ms-card-complex user-info ms-shadow-depth-20\">\n" +
    "        <div class=\"optional-header\">\n" +
    "          <div class=\"ms-list-item\">\n" +
    "            <div class=\"list-avatar\">\n" +
    "              <img ng-src=\"{{currentUser.profile_picture_medium}}\"/>\n" +
    "            </div>\n" +
    "            <div class=\"list-content\">\n" +
    "              <div class=\"primary\">\n" +
    "                <h5 class=\"header\">\n" +
    "                  <strong>\n" +
    "                    <span ng-bind=\"currentUser.name\"></span>\n" +
    "                  </strong>\n" +
    "                </h5>\n" +
    "              </div>\n" +
    "              <div class=\"secondary\">\n" +
    "                <small class=\"text-muted\" ng-bind=\"currentUser.email\"></small>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>  \n" +
    "        </div>\n" +
    "        <div class=\"supporting-text\">\n" +
    "          <span ng-bind=\"currentUser.location.address\" class=\"text-muted\"></span>\n" +
    "          <br>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <tabset justified=\"true\">\n" +
    "        <tab heading=\"Posts\" select=\"setActive(tabs.myPosts)\">\n" +
    "          <div ng-if=\"tabs.active == tabs.myPosts\">\n" +
    "            <div ms-infinite-scroll resource=\"Post\" request-to=\"'mine'\" push-to=\"myPosts\" paginator=\"myPostsPaginator\"></div>\n" +
    "            <div ng-repeat=\"post in myPosts\">\n" +
    "              <br>\n" +
    "              <div ms-post-renderer post=\"post\" record-view=\"false\" spreader-disabled=\"true\" modalify-post-actions=\"true\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"text-center\">\n" +
    "              <br>\n" +
    "              <div ng-if=\"myPostsPaginator.isComplete && myPosts.length==0\">\n" +
    "                <img src=\"images/no_posts.png\"/>\n" +
    "                <h4 class=\"text-muted\">\n" +
    "                  No posts to show right now.\n" +
    "                </h4>\n" +
    "              </div>\n" +
    "              <div ng-if=\"myPostsPaginator.state.isWorking\">\n" +
    "                <div ms-spinner></div>\n" +
    "                <p><small class=\"text-muted\">Please wait</small></p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </tab>\n" +
    "        <tab heading=\"Activity Log\" select=\"setActive(tabs.activities)\">\n" +
    "          <div ng-if=\"tabs.active == tabs.activities\">\n" +
    "            <div ms-infinite-scroll resource=\"Activity\" request-to=\"'query'\" push-to=\"myActivities\" paginator=\"myActivitiesPaginator\">\n" +
    "            </div>\n" +
    "            <div ng-repeat=\"activity in myActivities\">\n" +
    "              <br>\n" +
    "              <div ms-activity-renderer activity=\"activity\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"text-center\">\n" +
    "              <br>\n" +
    "              <div ng-if=\"myActivitiesPaginator.isComplete && myActivities.length==0\">\n" +
    "                <img src=\"images/no_posts.png\"/>\n" +
    "                <h4 class=\"text-muted\">\n" +
    "                  You do not have any activities.\n" +
    "                </h4>\n" +
    "              </div>\n" +
    "              <div ng-if=\"myActivitiesPaginator.state.isWorking\">\n" +
    "                <div ms-spinner></div>\n" +
    "                <p><small class=\"text-muted\">Please wait</small></p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </tab>\n" +
    "        <tab select=\"setActive(tabs.notifications)\" class=\"notifications-tab\">\n" +
    "          <tab-heading>\n" +
    "            <span>Notifications</span>\n" +
    "            <span class=\"fa fa-circle text-danger notification-indicator ms-animation-pulsate\" \n" +
    "                  ng-if=\"currentUser.unread_notifications_count > 0\">\n" +
    "            </span>\n" +
    "          </tab-heading>\n" +
    "          <div ng-if=\"tabs.active == tabs.notifications\">\n" +
    "            <div ms-infinite-scroll \n" +
    "                 resource=\"Post\" \n" +
    "                 request-to=\"'withNewNotifications'\" \n" +
    "                 push-to=\"myNotifications\" \n" +
    "                 paginator=\"myNotificationsPaginator\">\n" +
    "            </div>\n" +
    "            <div ng-repeat=\"post in myNotifications\" class=\"row\">\n" +
    "              <br>\n" +
    "              <div ms-notification-renderer post=\"post\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"text-center\">\n" +
    "              <br>\n" +
    "              <div ng-if=\"myNotificationsPaginator.isComplete && myNotifications.length==0\">\n" +
    "                <img src=\"images/no_posts.png\"/>\n" +
    "                <h4 class=\"text-muted\">\n" +
    "                  You do not have any new notifications.\n" +
    "                </h4>\n" +
    "              </div>\n" +
    "              <div ng-if=\"myNotificationsPaginator.state.isWorking\">\n" +
    "                <div ms-spinner></div>\n" +
    "                <p><small class=\"text-muted\">Please wait</small></p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </tab>\n" +
    "      </tabset>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/pages/notifications/template.html',
    "<div class=\"container\">\n" +
    "  <div class=\"ms-master-section\">\n" +
    "    <div class=\"ms-card-complex user-info ms-shadow-depth-20\">\n" +
    "      <div class=\"optional-header\">\n" +
    "        <div class=\"ms-list-item\">\n" +
    "          <div class=\"glyphicon-avatar\">\n" +
    "            <span class=\"glyphicon glyphicon-globe\"></span>\n" +
    "          </div>\n" +
    "          <div class=\"list-content\">\n" +
    "            <div class=\"primary\">\n" +
    "              <h5 class=\"header\">\n" +
    "                <strong>\n" +
    "                  Notifications\n" +
    "                </strong>\n" +
    "              </h5>\n" +
    "            </div>\n" +
    "            <div class=\"secondary\">\n" +
    "              ...\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>  \n" +
    "      </div>\n" +
    "      <div class=\"supporting-text text-muted\">\n" +
    "        You will be notified whenever anyone interacts with an information you have shared.\n" +
    "        <br>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div ms-infinite-scroll \n" +
    "         resource=\"Activity\" \n" +
    "         request-to=\"'notifications'\" \n" +
    "         push-to=\"notifications\" \n" +
    "         paginator=\"notificationsPaginator\">\n" +
    "    </div>\n" +
    "    <div ng-repeat=\"notification in notifications\">\n" +
    "      <br>\n" +
    "      <div ms-notification-renderer notification=\"notification\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"text-center\">\n" +
    "      <br>\n" +
    "      <div ng-if=\"notificationsPaginator.isComplete && notifications.length == 0\">\n" +
    "        <img src=\"images/no_posts.png\"/>\n" +
    "        <h4 class=\"text-muted\">\n" +
    "          You do not have any new notifications.\n" +
    "        </h4>\n" +
    "      </div>\n" +
    "      <div ng-if=\"notificationsPaginator.state.isWorking\">\n" +
    "        <div ms-spinner></div>\n" +
    "        <p><small class=\"text-muted\">Please wait</small></p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/pages/policies/template.html',
    "<div class=\"container\">\n" +
    "  <div class=\"text-center\">\n" +
    "    <a href=\"/\" class=\"logo logo-25 ms-animation-zoom-in\">\n" +
    "      <span class=\"fa fa-location-arrow\"></span>\n" +
    "    </a> \n" +
    "  </div>\n" +
    "  <div class=\"ms-master-section\">\n" +
    "    <div class=\"ms-card\" id=\"privacy-policy\">\n" +
    "      <h4>Privacy Policy</h3>\n" +
    "      <br>\n" +
    "      <h5>General Introduction</h4>\n" +
    "      <p>\n" +
    "        These terms and conditions govern your use of our website. Please read the terms in full before you use this Website. If you do not accept these terms, please do not use this Website. Using the Website implies that you accept these terms. We do occasionally update these terms so please refer back to them in the future.\n" +
    "        <br>\n" +
    "        <a href=\"/\">Spredit</a> understands the importance of keeping the information about you that you entrust to us confidential and secure (\"Customer Information\"). The information we collect may include your personal information, in other words information capable of identifying you as a particular individual, such as your name, email address (“Personal Information\") and Location. We therefore make it our highest priority to ensure that we look after your Customer Information and use it responsibly. By visiting our website you accept and consent to the collection, storage and processing of your Customer Information as described in this Privacy Policy.\n" +
    "      </p>\n" +
    "      <br>\n" +
    "      <h5>What personal information do we collect and how?</h5>\n" +
    "      <p>\n" +
    "        <a href=\"/\">Spredit</a> requires your public profile, email and list of friends. All this information is extracted from your Facebook profile using their API. Apart from that we also require your current location which is fetched using the Geolocation API which is present in every mordern browser.\n" +
    "        These are the minimum information that we need for a user to have a good experience on out site.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div class=\"ms-card\" id=\"location-policy\">\n" +
    "      <h4>Location Policy</h4>\n" +
    "      <br>\n" +
    "      <h5>Sharing on site</h5>\n" +
    "      <p>\n" +
    "        We make sure that your location is safe and private. It is never shared to any other user in the site unless you manually choose to do so. All our API responses from the server are designed in such a way which does not expose a relationship between the user and his current location.\n" +
    "      </p>\n" +
    "      <br>\n" +
    "      <h5>Third party services</h5>\n" +
    "      <p>\n" +
    "        We do have a list of highly trusted third party services with which your location history might be shared if required. This is done to enhance your browsing experience by localising and personlising the information that you see while you surf other websites. \n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div class=\"ms-card\" id=\"cookie-policy\">\n" +
    "      <h4>Cookie Policy</h4>\n" +
    "      <br>\n" +
    "      <p>\n" +
    "        Every website requires cookies to operate normally on your browser. Cookies are small chunks of information stored in your system.\n" +
    "      </p>\n" +
    "      <h5>Session cookies</h5>\n" +
    "      <p>\n" +
    "        Used to maintain something called session state. Session cookies are required for the website to function but are not used in any way to identify you personally.\n" +
    "      </p>\n" +
    "      <br>\n" +
    "      <h5>Permanent cookies</h5>\n" +
    "      <p>\n" +
    "        When you visit our website, we will assign a permanent cookie on the hard drive of your computer. You can view these by looking in the cookies directory of your browser installation. As the name implies, permanent cookies last for a long time and each time you visit our website you send us a copy of them allowing us to identify you from visit to visit.Cookies do not contain any Personal Information for example, your name, address, email address, or telephone number, but simply a unique identification number that identifies your computer to us.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/posts/show/template.html',
    "<div class=\"container\">\n" +
    "  <div class=\"ms-master-section\">\n" +
    "  \t<div class=\"text-center\">\n" +
    "      <br>\n" +
    "      <div ng-if=\"post.$resolved && !post.id\">\n" +
    "        <img src=\"images/no_posts.png\"/>\n" +
    "        <h4 class=\"text-muted\">\n" +
    "          The resource you are requesting for does not exist.\n" +
    "        </h4>\n" +
    "      </div>\n" +
    "      <div ng-if=\"!post.$resolved\">\n" +
    "        <div ms-spinner></div>\n" +
    "        <p><small class=\"text-muted\">Please wait</small></p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\t\t<div ng-if=\"post.$resolved && post.id\">\n" +
    "\t\t\t<div ms-post-renderer \n" +
    "\t\t\t\t\t post=\"post\" \n" +
    "\t\t\t\t\t selected-action=\"selectedAction\" \n" +
    "\t\t\t\t\t record-view=\"false\" \n" +
    "           full-content=\"true\"\n" +
    "           full-media=\"true\"\n" +
    "           spreader-disabled=\"true\"\n" +
    "           show-all-actions=\"true\">\n" +
    "      </div>\n" +
    "\t\t\t<br>\n" +
    "\t\t\t<div ms-post-details post=\"post\" action=\"selectedAction\"></div>\t\t \n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );

}]);
