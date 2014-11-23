(function(){
  var app = angular.module("ms.components.fbLogIn");
  app.directive("msFbLogIn", [function(){
    return{
      scope: { 
        appId: "="
      },
      replace: true,
      templateUrl: "app/scripts/components/fb_log_in/template.html",
      controller: "FbLogInController"
    }; 
  }]); 

}());
