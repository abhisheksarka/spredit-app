(function(){
  var app = angular.module('ms.components.comment.renderer');
  app.directive('msCommentRenderer', [function(){
    return{
      scope: {
        comment: "=" 
      },
      replace: true,
      controllerAs: 'commentRendererCtrl',
      templateUrl: 'app/scripts/components/comment/renderer/template.html',
      controller: 'CommentRendererController'
    }; 
  }]); 

}());
