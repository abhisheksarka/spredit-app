(function(){
  function Controller($scope, $modalInstance, action, post){
    function init() {
      $scope.close = close;
      $scope.selectedAction = action || 'propagation';
      $scope.action = action;
      $scope.post = post;
      $scope.setAction = setAction;
    };

    function setAction(action) {
      $scope.action = action;
    };
    
    function close() {
      $modalInstance.dismiss('cancel');
    };

    init();
  };

  angular.module('ms.components.post.actions')
  .controller('PostActionsModalController', [
    '$scope',  
    '$modalInstance',
    'action',
    'post',
    Controller 
  ]);
}());
