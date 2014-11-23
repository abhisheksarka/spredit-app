(function(){
  var module = angular.module("ms.components.fbSdk.lib");
  module.factory("FbSdkService", [ "$window", function($window) {
    var Resource = function() { };
        proto = Resource.prototype;
    
    Resource.init = function() {
      $window.FB.init({
        appId      : $window.ms.config.FB_APP_ID,
        cookie     : true,  // enable cookies to allow the server to access 
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.1' // use version 2.1
      });
    }; 
    
    Resource.loginStatus = function() { };
    
    Resource.me = function(callback) {
      FB.api('/me', callback);
    };
    
    Resource.login = function() {
      var self = this,
          connectedCallback = unauthorizedCallback = unknownCallback = angular.noop;
      FB.login(function(response) {
        if (response.status == 'connected') {
          connectedCallback(response);
        } else if (response.status == 'not_authorized') {
          unauthorizedCallback(response);
        } else {
          unknownCallback(response);
        };
      }, {
        scope: $window.ms.config.FB_PERMISSIONS_SCOPE
      });
      self.connected = function(callback) {
        connectedCallback = callback;
        return self;
      };
      self.unauthorized = function(callback) {
        unknownCallback = callback;
        return self;
      };
      self.unknown = function(callback) {
        unknownCallback = callback
        return self;
      };
      return self;
    };   

    return Resource;
    }
  ]);
}());