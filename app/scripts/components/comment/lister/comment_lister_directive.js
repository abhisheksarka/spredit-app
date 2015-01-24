(function(){
  var app = angular.module('ms.components.comment.lister');
  app.directive('msCommentLister', [function(){
    return{
      scope: {
        commentable: "=" 
      },
      replace: true,
      controllerAs: 'commentListerCtrl',
      templateUrl: 'app/scripts/components/comment/lister/template.html',
      controller: 'CommentListerController'
    }; 
  }]); 

}());
