(function(){
  function Controller($scope, Session, Comment){
    function init() {
      $scope.comments = Comment.query({
        commentable_type: 'Post',
        commentable_id: $scope.commentable.id
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
    Controller 
  ]);
}());
