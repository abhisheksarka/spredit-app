(function(){
  var app = angular.module("ms.components.conversation.createBox");
  app.directive("msCreateBox", [function(){
    return{
      scope: { 

      },
      replace: true,
      templateUrl: "app/scripts/components/conversation/create_box/template.html",
      controller: "CreateBoxController"
    }; 
  }]); 

}());
