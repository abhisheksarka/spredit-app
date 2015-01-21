(function(){
  var app = angular.module('ms.components.comment.creator');
  app.directive('msPostCreator', [function(){
    return{
      scope: {
        commentable: "=" 
      },
      replace: true,
      controllerAs: 'commentCreatorCtrl',
      templateUrl: 'app/scripts/components/comment/creator/template.html',
      controller: 'CommentCreatorController'
    }; 
  }]); 

}());
