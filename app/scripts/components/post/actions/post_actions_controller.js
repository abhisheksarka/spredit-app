(function(){
  function Controller($scope, Session){
    function init() {
      $scope.currentUser = Session.currentUser;
      $scope.setSelectedAction = setSelectedAction;
      setSelectedAction("comments");
    };

    function setSelectedAction(action) {
      $scope.selectedAction = action;
    };

    init();
  };

  angular.module('ms.components.post.actions')
  .controller('PostActionsController', [
    '$scope',  
    'SessionModel',
    Controller 
  ]);
}());
