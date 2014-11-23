(function(){
  var app = angular.module("ms.components.fbSdk.logIn");
  app.directive("msFbLogIn", [function(){
    return{
      scope: { 
        appId: "="
      },
      replace: true,
      templateUrl: "app/scripts/components/fb_sdk/log_in/template.html",
      controller: "FbLogInController"
    }; 
  }]); 

}());
