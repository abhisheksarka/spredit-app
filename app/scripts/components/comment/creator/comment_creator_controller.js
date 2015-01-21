(function(){
  function Controller($scope, Session, Comment){
    function init() {
      $scope.currentUser = Session.currentUser;
      
    };
  
    init();
  };

  angular.module('ms.components.comment.creator')
  .controller('CommentCreatorController', [
    '$scope',  
    'SessionModel',
    'CommentModel',
    Controller 
  ]);
}());
