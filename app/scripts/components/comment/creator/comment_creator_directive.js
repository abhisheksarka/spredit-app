(function(){
  var app = angular.module('ms.components.comment.creator');
  app.directive('msCommentCreator', [function(){
    return{
      scope: {
        commentable: '=',
        commentableType: '=' 
      },
      replace: true,
      controllerAs: 'commentCreatorCtrl',
      templateUrl: 'app/scripts/components/comment/creator/template.html',
      controller: 'CommentCreatorController'
    }; 
  }]); 

}());
