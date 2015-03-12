(function(){
  function Controller($scope, Session, ActionMappings, NotificationMessages){
    
    function init() {
      $scope.mappings = ActionMappings;
      $scope.messages = NotificationMessages;
    };

    init();
  };

  angular.module('ms.components.notification.renderer')
  .controller('NotificationRendererController', [
    '$scope',  
    'SessionModel',
    'ActionMappingService',
    'NotificationMessagesService',
    Controller 
  ]);
}());
