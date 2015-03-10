(function(){
  var app = angular.module('ms.components.notification.renderer');
  app.directive('msNotificationRenderer', [function(){
    return{
      scope: {
        notification: '=' 
      },
      replace: true,
      controllerAs: 'notificationRendererCtrl',
      templateUrl: 'app/scripts/components/notification/renderer/template.html',
      controller: 'NotificationRendererController'
    }; 
  }]); 

}());
