(function(){
  function Controller($scope, Session, PostActionsModal){
    function init() {
      $scope.currentUser = Session.currentUser;
      $scope.setSelectedAction = setSelectedAction;
      setSelectedAction("comments");
      $scope.openModal = openModal;
    };

    function openModal(post, action) {
      PostActionsModal.getInstance(post).open(action);
    }

    function setSelectedAction(action) {
      $scope.selectedAction = action;
    };

    init();
  };

  angular.module('ms.components.post.actions')
  .controller('PostActionsController', [
    '$scope',  
    'SessionModel',
    'PostActionsModalService',
    Controller 
  ]);
}());
