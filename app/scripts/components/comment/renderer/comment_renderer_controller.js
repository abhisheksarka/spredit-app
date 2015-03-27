(function(){
  function Controller($scope, Session, Comment){
    function init() {
      
    };
  };

  angular.module('ms.components.comment.renderer')
  .controller('CommentRendererController', [
    '$scope',  
    'SessionModel',
    'CommentModel',
    Controller 
  ]);
}());
