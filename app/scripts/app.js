/**
 * @ngdoc overview
 * @name maskdAppApp
 * @description
 * # maskdAppApp
 *
 * Main module of the application.
 */
angular.module('ms', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap',
  'ui.slider',
  'uiGmapgoogle-maps',
  'angularMoment',
  'angularFileUpload',
  'google.places',
  'monospaced.elastic',
  'ngScrollTo',
  
  // application modules
  'ms.core',
  'ms.components',
  'ms.pages'
])
 // when the app is initialized do all the stuff below
.run([ 
  'SessionModel', 
  'InitModel',
  '$window',
  '$q',
  '$location',
  '$rootScope',
  function(Session, Init, $window, $q, $location, $rootScope) { 
    (function () {
      $q.all([
        Init.get().$promise.then(setFb), 
        Session.current().$promise.then(setSession)
      ])
      .then(start);
    }());

    function setFb(response) {
      $window.ms.config.FB_APP_ID = response.app_id;
      $window.ms.config.FB_PERMISSIONS_SCOPE = response.permissions_scope;
    };

    function setSession(response) {
      Session.setAuthProperties(response);
    };

    function start() {
      $window.ms.config.APP_INIT = true;
      $rootScope.$broadcast('ms.events.appInit');
    }; 
  }
]);

(function() {
  function responseManager($injector, $rootScope, _, $cookies, $window, $q) {
    return {
      request: function(config) {
        return config;
      },
      response: function(res) {
        var response = res.data;
        if(!response.api) {
          return res;
        };

        var code = response.code,
            body = response.body,
            messages = response.messages,
            meta = response.meta || { };
        // when some error happened      
        if(code != 1000) {
          if(meta.errorFlash) {
            $rootScope.$broadcast('ms.events.flash', {
              message: _.values(messages)[0],
              type: 'danger' 
            });
          };
          // when session is no more valid
          if(code == 1200) {
            refresh();
          };

          function refresh() {
            var Session = $injector.get('SessionModel');
            Session.unsetAuthProperties();
            $window.location.reload();
          };
          return $q.reject(res.data);
        } else {
          res.data = body;
          return res;
        }
      }
    };  
  };
  angular.module('ms')
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider
    .interceptors
    .push([
      '$injector', 
      '$rootScope', 
      'UnderscoreService' ,
      '$cookies', 
      '$window',
      '$q',
      responseManager
    ]);
  }]);
}());