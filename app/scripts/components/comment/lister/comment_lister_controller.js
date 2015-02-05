(function(){
  function Controller($scope, Session, Comment, StateHandler){
    function init() {
      $scope.requestState = StateHandler.getInstance();
      $scope.commentable.comments = [];
      loadComments();
    };

    function loadComments() {
      var r = $scope.requestState;
      r.initiate();
      $scope.commentable.comments = Comment.query({
        commentable_type: 'Post',
        commentable_id: $scope.commentable.id
      });
      $scope.commentable.comments.$promise.then(function(){
        r.success();
      }, function(){
        r.error();
      });
    };

    $scope.$watch('commentable.id', function(nv) {
      init();
    });
  };

  angular.module('ms.components.comment.lister')
  .controller('CommentListerController', [
    '$scope',  
    'SessionModel',
    'CommentModel',
    'StateHandlerService',
    Controller 
  ]);
}());
