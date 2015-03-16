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
        try {
          
        } catch(err) { };
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
    $httpProvider.interceptors.push(['$injector', '$rootScope', 'UnderscoreService' ,'$cookies', addTokenToHeader]);
  }]);
}());