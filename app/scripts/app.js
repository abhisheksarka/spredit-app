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
    
    // application modules
    'ms.core',
    'ms.components',
    'ms.pages'
  ]);

(function() {
  function addTokenToHeader($injector) {
    return {
      request: function(config) {
        try {
          config.headers['Jw-Token'] =  $injector.get('SessionModel').currentToken.value;
        } catch(err) { };
        return config;
      },
      response: function(res) {
        return res;
      }
    };  
  };
  angular.module('ms')
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push(['$injector', addTokenToHeader]);
  }]);
}());