(function(){
  function Controller($scope, Session, Activity){
    
    function init() {
      $scope.mappings = Activity.notificationMappings;
    };

    init();
  };

  angular.module('ms.components.notification.renderer')
  .controller('NotificationRendererController', [
    '$scope',  
    'SessionModel',
    'ActivityModel',
    Controller 
  ]);
}());
