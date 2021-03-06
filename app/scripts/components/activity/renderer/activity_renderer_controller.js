(function(){
  function Controller($scope, Session, Activity){
    function init() {
      $scope.mappings = Activity.activityMappings;
    };
    init();
  };

  angular.module('ms.components.activity.renderer')
  .controller('ActivityRendererController', [
    '$scope',  
    'SessionModel',
    'ActivityModel',
    Controller 
  ]);
}());
