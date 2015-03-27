(function(){
  var app = angular.module('ms.components.comment.actions');
  app.directive('msCommentActions', [function(){
    return{
      scope: {
        comment: "=" 
      },
      replace: true,
      controllerAs: 'commentActionsCtrl',
      templateUrl: 'app/scripts/components/comment/actions/template.html',
      controller: 'CommentActionsController'
    }; 
  }]); 

}());
