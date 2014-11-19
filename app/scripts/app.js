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
    'ngMaterial',
    // application modules
    'ms.components',
    'ms.pages'
  ]);