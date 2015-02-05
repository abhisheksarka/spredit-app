(function(){
  function Controller($scope, Session, Comment, StateHandler){
    function init() {
      pristineComment();
      $scope.state = StateHandler.getInstance();
      $scope.createComment = createComment;
    };

    function pristineComment() {
      $scope.comment = new Comment({
        commentable_type: $scope.commentableType,
        commentable_id: $scope.commentable.id
      });
    };

    function createComment() {
      $scope.state.initiate();
      $scope.comment.$save().then(afterSave, $scope.state.error);
    };

    function afterSave() {
      $scope.commentable.comments.unshift($scope.comment);
      $scope.state.success();
      pristineComment();
    };

    $scope.$watch('commentable.id', function(nv) {
      if(nv) {
        init();
      }
    });
  };

  angular.module('ms.components.comment.creator')
  .controller('CommentCreatorController', [
    '$scope',  
    'SessionModel',
    'CommentModel',
    'StateHandlerService',
    Controller 
  ]);
}());
