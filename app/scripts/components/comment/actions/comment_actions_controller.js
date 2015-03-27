(function(){
  function Controller($scope, Session, Comment){
    function init() {
      
    };
  };

  angular.module('ms.components.comment.actions')
  .controller('CommentActionsController', [
    '$scope',  
    'SessionModel',
    'VoteModel',
    Controller 
  ]);
}());
