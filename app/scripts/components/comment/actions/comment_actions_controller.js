(function(){
  function Controller($scope, Session, VoteModel){
    function init() {
      $scope.vote = vote;
    };

    function vote(voteType) {
      var vote = new VoteModel(buildParams(voteType));
      vote.$save();
    };

    function buildParams(voteType) {
      return {
        votable_id: $scope.comment.id,
        votable_type: 'Comment',
        vote_type: voteType
      };
    };
    init();
  };

  angular.module('ms.components.comment.actions')
  .controller('CommentActionsController', [
    '$scope',  
    'SessionModel',
    'VoteModel',
    Controller 
  ]);
}());
