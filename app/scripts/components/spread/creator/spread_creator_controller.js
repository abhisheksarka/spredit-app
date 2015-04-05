(function(){
  function Controller($scope, $rootScope, Spread, StateHandler, Session){
    function init() {
      $scope.type = $scope.type || 'Post';
      $scope.callback = $scope.callback || angular.noop;
      $scope.spread = new Spread({
        spreadable_type: $scope.type,
        spreadable_id: $scope.spreadable.id
      });
      
      $scope.requestState = StateHandler.getInstance();
      $scope.containIt = containIt;
      $scope.spreadIt = spreadIt;
      $scope.currentUser = Session.currentUser;
    };

    function spreadIt() {
      save('spread');
    };

    function containIt() {
      save('contained');
    };

    function save(type) {
      if($scope.requestState.isWorking) return;
      $scope.requestState.initiate();
      $scope.spread.action = type;
      $scope.spread.meta = {
        errorFlash: true
      };
      $scope.spread.$save().then(function(response){
        broadcast(response, type);
        $scope.requestState.success();
      }, function(response, status, headers, config) {
        broadcast(response, type);
        $scope.requestState.error();
      });
    };

    function broadcast(response, type) {
      $rootScope.$broadcast('event.spreader.action', type, response);
    };
    
    $scope.$watch('spreadable.id', function(nv, ov){
      init();
    });
  };

  angular.module('ms.components.spread.creator')
  .controller('SpreadCreatorController', [
    '$scope',  
    '$rootScope',
    'SpreadModel',
    'StateHandlerService',
    'SessionModel',
    Controller 
  ]);
}());
