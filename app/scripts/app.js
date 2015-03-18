'use strict';

/**
 * @ngdoc overview
 * @name maskdAppApp
 * @description
 * # maskdAppApp
 *
 * Main module of the application.
 */
angular
  .module('ms', [
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
    
    // application modules
    'ms.core',
    'ms.components',
    'ms.pages'
  ]);

(function() {
  function addTokenToHeader($injector, $rootScope, _, $cookies) {
    return {
      request: function(config) {
        return config;
      },
      response: function(res) {
        var e = res.data.errors;
        if(e) {
          $rootScope.$broadcast('ms.events.flash', {
            message: _.values(e)[0],
            type: 'danger' 
          });
        };
        return res;
      }
    };  
  };
  angular.module('ms')
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider
    .interceptors
    .push(['$injector', '$rootScope', 'UnderscoreService' ,'$cookies', addTokenToHeader]);
  }])

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
        if(!response.id) {
          return;
        };
        Session.setAuthProperties(response);
      };

      function start() {
        $window.ms.config.APP_INIT = true;
        $rootScope.$broadcast('ms.events.appInit');
      }; 
    }
  ]);
}());